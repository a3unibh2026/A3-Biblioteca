# A3-Termoterapia
Sistema web para apoio à decisão clínica em termoterapia e auxilio dos pacientes no auto cuidado, estruturado em uma arquitetura em multicamadas limpa e funcional (Front-end + API REST + Banco de Dados local).

## Participantes
- Artur Araújo
- Maria Luiza
- Lucas Riazzi
- Luiz Andre
- Stéfany Santana
- Davi de Assis

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- Python
- FastAPI
- MySQL

## Funcionalidades Concluídas
- Cadastrar e autenticar usuários (pacientes e fisioterapeutas)
- Consultar condições clínicas
- Buscar recursos de termoterapia
- Exibir relações entre condições e recursos
- Exibir e salvar registros de tratamentos

## Resumo da Arquitetura e Implementação
O projeto foi construído seguindo uma arquitetura em multicamadas:
- **Front-end:** Interface web desenvolvida com HTML, CSS e JavaScript puro para interação do usuário.
- **Back-end (API):** Desenvolvida em Python com FastAPI, gerenciando todas as regras de negócio, autenticação e endpoints de comunicação. Todas as rotas estão documentadas e testadas via Swagger UI.
- **Banco de Dados:** Banco relacional MySQL (`termoterapia_db`) totalmente integrado à API, estruturado para persistir usuários, condições, recursos, tratamentos, solicitações de atendimento e o histórico de mensagens do chat.

**Qualquer alteração feita após a data de entrega da atividade foi por motivos de reaproveitamento do trabalho para outra UC.
