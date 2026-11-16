/* =========================================================================
   CAMADA DE AUTENTICAÇÃO (Atualizada para Fisioterapeuta com CREFITO e Estudante)
   ========================================================================= */

const ACCOUNTS_KEY = 't_accounts';
const SESSION_KEY = 't_user';

function readAccounts() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function writeAccounts(list) {
  try {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(list));
  } catch (e) {}
}

export const authService = {
  /* Registra um novo usuário com validação de CREFITO ou Instituição de Ensino */
  async register({ role, subRole, nome, email, senha, crefito = '', instituicao = '' }) {
    const cleanEmail = email.trim().toLowerCase();
    const accounts = readAccounts();

    if (accounts.some((acc) => acc.email === cleanEmail)) {
      return { ok: false, error: 'Este e-mail já está cadastrado. Faça login.' };
    }

    // Regra prática: Fisioterapeuta exige CREFITO. Estudante exige Instituição.
    if (role === 'f') {
      if (subRole === 'profissional' && !crefito.trim()) {
        return { ok: false, error: 'O número do CREFITO é obrigatório para fisioterapeutas.' };
      }
      if (subRole === 'estudante' && !instituicao.trim()) {
        return { ok: false, error: 'O nome da instituição de ensino é obrigatório para estudantes.' };
      }
    }

    const newUser = {
      id: 'usr_' + Date.now(),
      role, // 'p' (paciente) | 'f' (fisioterapeuta / estudante)
      subRole: role === 'f' ? subRole : 'paciente', // 'profissional' | 'estudante'
      nome: nome.trim(),
      email: cleanEmail,
      senha,
      crefito: role === 'f' && subRole === 'profissional' ? crefito.trim() : '',
      instituicao: role === 'f' && subRole === 'estudante' ? instituicao.trim() : '',
      // Fisioterapeuta profissional simula aprovação via API futura (aqui aprovado por padrão no mock)
      aprovado: role === 'f' && subRole === 'profissional' ? true : false,
      createdAt: new Date().toISOString()
    };

    accounts.push(newUser);
    writeAccounts(accounts);

    const sessionUser = {
      id: newUser.id,
      role: newUser.role,
      subRole: newUser.subRole,
      nome: newUser.nome,
      email: newUser.email,
      crefito: newUser.crefito,
      instituicao: newUser.instituicao,
      aprovado: newUser.aprovado
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    return { ok: true, user: sessionUser };
  },

  /* Autentica usuário existente */
  async login({ email, senha }) {
    const cleanEmail = email.trim().toLowerCase();
    const accounts = readAccounts();

    const found = accounts.find((acc) => acc.email === cleanEmail);
    if (!found) {
      return { ok: false, error: 'Nenhuma conta encontrada com este e-mail.' };
    }

    if (found.senha !== senha) {
      return { ok: false, error: 'Senha incorreta. Tente novamente.' };
    }

    const sessionUser = {
      id: found.id,
      role: found.role,
      subRole: found.subRole || 'profissional',
      nome: found.nome,
      email: found.email,
      crefito: found.crefito || '',
      instituicao: found.instituicao || '',
      aprovado: found.aprovado ?? true
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    return { ok: true, user: sessionUser };
  },

  /* Encerra a sessão atual */
  async logout() {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem('t_role');
  }
};