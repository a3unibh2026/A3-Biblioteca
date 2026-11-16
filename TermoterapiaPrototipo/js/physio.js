import { ic, RECURSOS_CLINICOS, CONDICOES_CLINICAS, OBJETIVOS_TERAPEUTICOS, RELACOES_EVIDENCIA } from './data.js';
import { S, sv, go, H, favs, ld } from './App.js';

const getPatientChatRequests = () => ld('t_patient_requests', [
  { id: 'req_1', paciente: 'Ana Souza', condicao: 'Osteoartrite de joelho', mensagem: 'Olá, doutor(a)! Gostaria de orientações sobre o uso de calor superficial antes dos exercícios.', status: 'pendente', data: 'Hoje, 10:30' },
  { id: 'req_2', paciente: 'Carlos Silva', condicao: 'Entorse de tornozelo', mensagem: 'Boa tarde. Posso alternar crioterapia com compressão elástica após o 3º dia?', status: 'aceito', data: 'Ontem, 16:45' }
]);

export const PhysioViews = {
  home_f: () => {
    const u = ld('t_user', {});
    const isEstudante = u.subRole === 'estudante';
    const condSel = S.p.c || 'todas';
    const objSel = S.p.obj || 'todos';
    const recSel = S.p.rec || 'todos';
    const F = favs();

    let keys = condSel === 'todas'
      ? Object.keys(RECURSOS_CLINICOS)
      : CONDICOES_CLINICAS[condSel].recursosEstudados;

    if (recSel !== 'todos') {
      keys = keys.filter(k => k === recSel);
    }

    if (objSel !== 'todos') {
      keys = keys.filter(k => RECURSOS_CLINICOS[k].objetivosEstudados.includes(objSel));
    }

    const condObj = condSel !== 'todas' ? CONDICOES_CLINICAS[condSel] : null;
    const objLabel = objSel !== 'todos' ? OBJETIVOS_TERAPEUTICOS[objSel] : null;

    const objetivosDisponiveis = condObj
      ? condObj.objetivos
      : Object.keys(OBJETIVOS_TERAPEUTICOS);

    return `
      <main>
        <div class="hero" style="padding-bottom:20px">
          <button class="bell" data-a="bell" aria-label="Avisos">${ic('bell')}</button>
          <span class="pill o" style="color:var(--navy);margin-bottom:6px;font-size:11px">
            ${isEstudante ? 'PERFIL ESTUDANTE (Acesso Acadêmico)' : 'PERFIL PROFISSIONAL (CREFITO ATIVO)'}
          </span>
          <h1>Termoterapia</h1>
          <p>Apoio à decisão clínica e suporte aos pacientes</p>
        </div>

        ${isEstudante ? `
          <div class="note" style="background:var(--ice);border-color:var(--bl);margin-bottom:14px">
            ${ic('info')}
            <span><b>Acesso Acadêmico:</b> O atendimento e suporte por chat aos pacientes é exclusivo para profissionais formados com CREFITO ativo.</span>
          </div>
        ` : ''}

        <div class="card" style="background:var(--bg);padding:12px;margin-top:14px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
            <label class="l" for="sel-cond" style="margin:0">1. Condição clínica (10)</label>
            ${(condSel !== 'todas' || objSel !== 'todos' || recSel !== 'todos')
              ? `<button class="chip" style="padding:3px 9px;font-size:12px" data-a="reset-filtros">Limpar filtros</button>`
              : ''}
          </div>
          <select id="sel-cond" data-a="f-cond" style="margin:0 0 10px">
            <option value="todas" ${condSel === 'todas' ? 'selected' : ''}>Todas as condições</option>
            ${Object.entries(CONDICOES_CLINICAS).map(([k, v]) => `
              <option value="${k}" ${condSel === k ? 'selected' : ''}>${v.nome}</option>
            `).join('')}
          </select>

          <label class="l" for="sel-obj" style="margin:0 0 4px">2. Objetivo terapêutico (7)</label>
          <select id="sel-obj" data-a="f-obj" style="margin:0 0 10px">
            <option value="todos" ${objSel === 'todos' ? 'selected' : ''}>Todos os objetivos</option>
            ${objetivosDisponiveis.map(ok => `
              <option value="${ok}" ${objSel === ok ? 'selected' : ''}>${OBJETIVOS_TERAPEUTICOS[ok]}</option>
            `).join('')}
          </select>

          <label class="l" for="sel-rec" style="margin:0 0 4px">3. Recurso físico (8)</label>
          <select id="sel-rec" data-a="f-rec" style="margin:0">
            <option value="todos" ${recSel === 'todos' ? 'selected' : ''}>Todos os 8 recursos</option>
            ${Object.entries(RECURSOS_CLINICOS).map(([rk, rv]) => `
              <option value="${rk}" ${recSel === rk ? 'selected' : ''}>${rv.nome}</option>
            `).join('')}
          </select>
        </div>

        ${condObj ? `
          <div class="card" style="background:var(--ice);border-color:var(--bl)">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:4px">
              <b style="font-size:15px">${condObj.nome}</b>
              <span class="pill">${condObj.regiao}</span>
            </div>
            <p style="margin:4px 0;font-size:13px"><b>O que a evidência demonstra:</b> ${condObj.resumoEvidencia}</p>
            <p style="margin:4px 0;font-size:13px;color:var(--mut)"><b>Evidência insuficiente / controversa:</b> ${condObj.evidenciaInsuficiente}</p>
            <p style="margin:6px 0 0;font-size:12px;font-weight:700;color:var(--navy)">${condObj.observacao}</p>
          </div>` : ''}

        <div style="display:flex;justify-content:space-between;align-items:center;margin:12px 0 6px;gap:8px">
          <div style="font-size:13px;font-weight:700;color:var(--mut)">
            ${condObj || objLabel
              ? `BUSCA: ${condObj ? condObj.nome.replace(/^\d+\.\s*/, '') : 'Geral'}${objLabel ? ' → ' + objLabel : ''}`
              : `${keys.length} recurso(s)`}
          </div>
          <button class="chip" style="padding:5px 10px;font-size:12px;flex:none" data-a="go" data-v="cmp">Comparar 2</button>
        </div>

        ${keys.map(k => {
          const r = RECURSOS_CLINICOS[k];
          const relKey = `${condSel}__${k}`;
          const rel = RELACOES_EVIDENCIA[relKey];

          const beneficio = rel ? rel.beneficio : r.evidenciaPorCondicao[0].res;
          const limitacoes = rel ? rel.limitacoes : 'Efeito varia conforme protocolo, condição e desfecho; usar como adjuvante.';
          const seguranca = rel ? rel.seguranca : r.contraindicacoes.split(',')[0] + '.';
          const certezaTag = rel ? rel.certeza : r.certeza;

          return `
            <div class="card res ${r.cls}" tabindex="0" role="button" data-a="go" data-v="ficha" data-k="${k}">
              <button class="fav ${F.includes(k) ? 'on' : ''}" data-a="fav" data-k="${k}" aria-label="Favoritar ${r.nome}">${ic('star')}</button>
              <div style="padding-right:2.5rem;margin-bottom:6px">
                <span class="pill ${r.cls === 'c' ? 'o' : ''}">Evidência: ${certezaTag}</span>
              </div>
              <h3>${r.nome}</h3>
              <p style="font-size:12px;color:var(--mut);margin-bottom:6px">${r.categoria}</p>
              <p style="margin:3px 0;font-size:13.5px"><b>• Possível benefício:</b> ${beneficio}</p>
              <p style="margin:3px 0;font-size:13.5px"><b>• Limitações:</b> ${limitacoes}</p>
              <p style="margin:3px 0;font-size:13.5px"><b>• Segurança:</b> ${seguranca}</p>
              <div style="margin-top:8px;font-size:13px;font-weight:700;color:var(--bl)">Abrir ficha científica completa →</div>
            </div>`;
        }).join('') || '<div class="ph">Nenhum recurso encontrado para essa combinação de condição e objetivo.</div>'}

        <div class="note" style="margin-top:14px">
          ${ic('shield')}
          <span><b>Apoia a decisão clínica, mas não substitui avaliação, julgamento e responsabilidade profissional.</b></span>
        </div>
      </main>`;
  },

  'chat-list': () => {
    const requests = getPatientChatRequests();
    return H('Atendimento via Chat', 1) + `
      <main>
        <p style="color:var(--mut);margin:0 0 14px;font-size:14px">Solicitações de orientação e dúvidas enviadas por pacientes do aplicativo:</p>
        
        ${requests.map(req => `
          <div class="card" style="border-left:5px solid ${req.status === 'pendente' ? 'var(--or)' : 'var(--bl)'}">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <b style="font-size:16px">${req.paciente}</b>
              <span class="pill ${req.status === 'pendente' ? 'o' : ''}">${req.status === 'pendente' ? 'Pendente' : 'Em atendimento'}</span>
            </div>
            <p style="margin:2px 0 6px;font-size:13px;color:var(--bl)"><b>Condição:</b> ${req.condicao} · <span style="color:var(--mut)">${req.data}</span></p>
            <div style="background:var(--ice);padding:10px;border-radius:10px;font-size:13.5px;margin-bottom:10px">
              "${req.mensagem}"
            </div>
            <div style="display:flex;gap:8px">
              <button class="btn" style="margin:0;padding:8px" data-a="open-chat-room" data-k="${req.id}">
                ${req.status === 'pendente' ? 'Aceitar e Responder' : 'Continuar Conversa'}
              </button>
            </div>
          </div>
        `).join('')}
      </main>`;
  },

  'chat-room': () => {
    const reqId = S.p.reqId || 'req_1';
    const requests = getPatientChatRequests();
    const req = requests.find(r => r.id === reqId) || requests[0];
    const historico = ld(`t_chat_${req.id}`, [
      { autor: 'paciente', texto: req.mensagem, hora: req.data }
    ]);

    return H(`Chat: ${req.paciente}`, 1) + `
      <main style="display:flex;flex-direction:column;height:calc(100vh - 120px);padding-bottom:10px">
        <div style="background:var(--ice);padding:8px 12px;border-radius:10px;margin-bottom:10px;font-size:13px">
          <b>Foco do atendimento:</b> ${req.condicao}
        </div>

        <div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:8px;margin-bottom:10px;padding-right:4px">
          ${historico.map(m => `
            <div style="align-self:${m.autor === 'fisio' ? 'flex-end' : 'flex-start'};max-width:85%;background:${m.autor === 'fisio' ? 'var(--navy)' : '#fff'};color:${m.autor === 'fisio' ? '#fff' : 'var(--text)'};padding:10px 14px;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.08);font-size:13.5px">
              <div style="font-size:11px;opacity:0.7;margin-bottom:2px">${m.autor === 'fisio' ? 'Você (Fisioterapeuta)' : req.paciente} · ${m.hora}</div>
              <div>${m.texto}</div>
            </div>
          `).join('')}
        </div>

        <div style="display:flex;gap:6px;background:var(--bg);padding-top:6px">
          <input class="in" id="chat-msg" placeholder="Digite sua orientação profissional..." style="margin:0">
          <button class="btn" style="margin:0;width:auto;padding:0 16px" data-a="send-chat-msg" data-k="${req.id}">${ic('send')}</button>
        </div>
      </main>`;
  },

  ficha: () => {
    const k = S.p.k;
    const r = RECURSOS_CLINICOS[k];
    const condNomes = r.condicoesMvp.map(ck => CONDICOES_CLINICAS[ck]?.nome.replace(/^\d+\.\s*/, '')).filter(Boolean).join('; ');
    const objNomes = r.objetivosEstudados.map(ok => OBJETIVOS_TERAPEUTICOS[ok]).join('; ');

    return H('Ficha científica', 1) + `
      <main>
        <div class="card">
          <span class="pill ${r.cls === 'c' ? 'o' : ''}">${r.categoria}</span>
          <h2 style="font-size:24px;margin:8px 0 4px">${r.nome}</h2>
          <p style="color:var(--mut);font-size:14px;margin:0 0 10px">${r.descricao}</p>

          <p style="margin:6px 0"><b>Objetivos estudados:</b> ${objNomes}.</p>
          <p style="margin:6px 0"><b>Condições clínicas:</b> ${condNomes}.</p>
          <p style="margin:6px 0"><b>Mecanismo / efeitos fisiológicos:</b> ${r.mecanismo}</p>
        </div>

        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <b style="font-size:16px">O que a evidência mostra</b>
            <span class="pill">Certeza: ${r.certeza}</span>
          </div>
          <p style="font-size:13px;color:var(--mut);margin:0 0 8px"><b>Desfechos avaliados:</b> ${r.desfechos}</p>
          ${r.evidenciaPorCondicao.map(item => `
            <div style="background:var(--ice);padding:8px 10px;border-radius:10px;margin-bottom:6px;font-size:13.5px">
              <b>${item.cond}:</b> ${item.res}
            </div>
          `).join('')}
        </div>

        <div class="card">
          <b style="font-size:16px;display:block;margin-bottom:4px">Parâmetros encontrados nos estudos</b>
          <p style="margin:0;font-size:14px">${r.parametrosEstudos}</p>
        </div>

        <div class="card" style="border-left:5px solid var(--or)">
          <b style="font-size:16px;display:block;margin-bottom:6px">Segurança e precauções</b>
          <p style="margin:4px 0;font-size:14px"><b>Contraindicações:</b> ${r.contraindicacoes}</p>
          <p style="margin:4px 0;font-size:14px"><b>Eventos adversos / sinais de alerta:</b> ${r.eventosAdversos}</p>
        </div>

        <div class="card">
          <b style="font-size:16px;display:block;margin-bottom:6px">Referências científicas</b>
          <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--mut)">
            ${r.referencias.map(ref => `<li style="margin-bottom:4px">${ref}</li>`).join('')}
          </ul>
          <p style="margin:8px 0 0;font-size:12px;color:var(--bl);font-weight:700">Última revisão: ${r.ultimaRevisao}</p>
        </div>

        <div class="note">
          ${ic('shield')}
          <span>Apoia a decisão clínica, mas não substitui avaliação, julgamento e responsabilidade profissional.</span>
        </div>
      </main>`;
  },

  condicoes: () => H('10 Condições Clínicas') + `
    <main>
      <p style="color:var(--mut);margin:0 0 12px;font-size:14px">Toque em uma condição para filtrar os recursos estudados e objetivos terapêuticos.</p>
      ${Object.entries(CONDICOES_CLINICAS).map(([k, c]) => `
        <div class="card" role="button" tabindex="0" data-a="pick-cond" data-k="${k}" style="cursor:pointer">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:4px">
            <b style="font-size:16px">${c.nome}</b>
            <span class="pill">${c.regiao}</span>
          </div>
          <p style="margin:4px 0;font-size:13px"><b>Objetivos:</b> ${c.objetivos.map(ok => OBJETIVOS_TERAPEUTICOS[ok]).join(' · ')}</p>
          <p style="margin:4px 0;font-size:13px;color:var(--mut)">${c.resumoEvidencia}</p>
          <span style="display:inline-block;margin-top:6px;font-size:13px;font-weight:700;color:var(--bl)">Consultar ${c.recursosEstudados.length} recurso(s) estudado(s) →</span>
        </div>
      `).join('')}
    </main>`,

  cmp: () => {
    const a = S.p.a || 'crio_sup';
    const b = S.p.b || 'calor_sup';
    const A1 = RECURSOS_CLINICOS[a];
    const B1 = RECURSOS_CLINICOS[b];
    const opts = x => Object.entries(RECURSOS_CLINICOS).map(([k, r]) => `<option value="${k}" ${k === x ? 'selected' : ''}>${r.nome}</option>`).join('');

    return H('Comparar 2 recursos', 1) + `
      <main>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div><label class="l" for="ca">Recurso A</label><select id="ca" data-a="cmp">${opts(a)}</select></div>
          <div><label class="l" for="cb">Recurso B</label><select id="cb" data-a="cmp">${opts(b)}</select></div>
        </div>
        ${[
          ['Categoria', A1.categoria, B1.categoria],
          ['Certeza da evidência', A1.certeza, B1.certeza],
          ['Mecanismo', A1.mecanismo, B1.mecanismo],
          ['Parâmetros nos estudos', A1.parametrosEstudos, B1.parametrosEstudos],
          ['Contraindicações', A1.contraindicacoes, B1.contraindicacoes]
        ].map(x => `
          <div class="card">
            <b style="color:var(--mut);font-size:13px">${x[0]}</b>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px;font-size:13.5px">
              <div>${x[1]}</div>
              <div style="border-left:1px solid var(--line);padding-left:10px">${x[2]}</div>
            </div>
          </div>`).join('')}
        <div class="note bl">${ic('info')}<span>A comparação apresenta características e evidências sem pressupor superioridade universal de um recurso sobre outro.</span></div>
      </main>`;
  },

  fav: () => {
    const F = favs();
    return H('Recursos favoritos') + `
      <main>
        ${F.map(k => {
          const r = RECURSOS_CLINICOS[k];
          if (!r) return '';
          return `
            <div class="card res ${r.cls}" data-a="go" data-v="ficha" data-k="${k}">
              <button class="fav on" data-a="fav" data-k="${k}" aria-label="Remover favorito">${ic('star')}</button>
              <div style="padding-right:2.5rem;margin-bottom:4px">
                <span class="pill ${r.cls === 'c' ? 'o' : ''}">${r.categoria}</span>
              </div>
              <h3>${r.nome}</h3>
              <p>${r.descricao}</p>
            </div>`;
        }).join('') || '<div class="ph">Toque na estrela de um recurso para salvar nos favoritos.</div>'}
      </main>`;
  }
};

export function handlePhysioAction(a, v, k, e, draw) {
  if (a === 'reset-filtros') {
    S.p = { c: 'todas', obj: 'todos', rec: 'todos' };
    draw();
    return true;
  }

  if (a === 'pick-cond') {
    S.s = 'home';
    S.p = { c: k, obj: 'todos', rec: 'todos' };
    draw();
    return true;
  }

  if (a === 'open-chat-room') {
    const requests = getPatientChatRequests();
    const req = requests.find(r => r.id === k);
    if (req) {
      req.status = 'aceito';
      sv('t_patient_requests', requests);
    }
    go('chat-room', { reqId: k });
    return true;
  }

  if (a === 'send-chat-msg') {
    const input = document.getElementById('chat-msg');
    const texto = input ? input.value.trim() : '';
    if (!texto) return true;

    const historico = ld(`t_chat_${k}`, []);
    historico.push({
      autor: 'fisio',
      texto,
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    sv(`t_chat_${k}`, historico);
    draw();
    return true;
  }

  if (a === 'fav') {
    e.stopPropagation();
    const F = favs();
    const i = F.indexOf(k);
    i >= 0 ? F.splice(i, 1) : F.push(k);
    sv('t_fav', F);
    draw();
    return true;
  }

  return false;
}