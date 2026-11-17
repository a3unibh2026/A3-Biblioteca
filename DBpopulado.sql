-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: termoterapia_db
-- ------------------------------------------------------
-- Server version	8.4.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `condicao_recurso`
--

DROP TABLE IF EXISTS `condicao_recurso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condicao_recurso` (
  `id` int NOT NULL AUTO_INCREMENT,
  `condicao_id` int NOT NULL,
  `recurso_id` int NOT NULL,
  `beneficio` text,
  `limitacoes` text,
  `seguranca` text,
  `certeza` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `condicao_id` (`condicao_id`),
  KEY `recurso_id` (`recurso_id`),
  CONSTRAINT `condicao_recurso_ibfk_1` FOREIGN KEY (`condicao_id`) REFERENCES `condicoes` (`id`) ON DELETE CASCADE,
  CONSTRAINT `condicao_recurso_ibfk_2` FOREIGN KEY (`recurso_id`) REFERENCES `recursos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condicao_recurso`
--

LOCK TABLES `condicao_recurso` WRITE;
/*!40000 ALTER TABLE `condicao_recurso` DISABLE KEYS */;
INSERT INTO `condicao_recurso` VALUES (1,1,1,'Alívio rápido da dor e controle do componente inflamatório na osteoartrite.','Efeito analgésico de curta duração; usar como adjuvante.','Evitar em pacientes com crioglobulinemia ou insensibilidade.','Moderada'),(2,1,2,'Redução da rigidez articular e melhora da extensibilidade dos tecidos periarticulares.','Não usar em fases de inflamação aguda severa.','Monitorar a temperatura para evitar queimaduras.','Moderada'),(3,2,5,'Relaxamento profundo da musculatura paravertebral lombar.','Efeito varia conforme a cronicidade da dor.','Contraindicado em pacientes com marcapasso ou metais locais.','Baixa a Moderada'),(4,8,1,'Padrão ouro nas primeiras 48h para limitar edema e dor aguda no tornozelo.','Uso prolongado pode retardar o processo cicatricial.','Respeitar o limite máximo de 20 minutos por aplicação.','Moderada'),(5,3,2,'Alívio da dor tensional e melhora do tônus na musculatura cervical superior.','Efeito temporário se não associado a cinesioterapia e correção postural.','Cuidado com a intensidade do calor em áreas de pele sensível no pescoço.','Moderada'),(6,4,6,'Estimulação do fluxo sanguíneo local e facilitação do relaxamento paravertebral crônico.','Baixa penetração em tecidos profundos da coluna lombar.','Evitar em pacientes com quadro álgico agudo inflamatório nas primeiras 24h.','Baixa a Moderada'),(7,5,3,'Redução do edema subagudo e melhora da viscoelasticidade do tendão de Aquiles antes do exercício.','Não substitui o carregamento mecânico progressivo (exercício excêntrico).','Monitorar integridade cutânea em áreas de proeminência óssea.','Moderada'),(8,6,4,'Efeito bomba vascular através da alternância térmica, auxiliando na redução do edema crônico de pé e tornozelo.','Contraindicado na fase estritamente aguda ou em neuropatias periféricas graves.','Verificar histórico de alterações vasculares periféricas ou Doença de Raynaud.','Baixa'),(9,7,2,'Aumento da extensibilidade da cápsula articular retraída na capsulite adesiva.','Eficaz apenas quando combinado com mobilização articular passiva e ativa.','Evitar logo após infiltrações ou em fases de dor altamente reativa.','Moderada'),(10,9,1,'Minimização da resposta inflamatória secundária e controle do hematoma imediato após estiramento muscular.','Uso excessivo nas primeiras horas pode inibir os fatores de regeneração tecidual inicial.','Nunca aplicar gelo direto sobre a pele; utilizar barreira de proteção.','Alta');
/*!40000 ALTER TABLE `condicao_recurso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `condicoes`
--

DROP TABLE IF EXISTS `condicoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `condicoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `regiao` varchar(100) NOT NULL,
  `objetivo` text NOT NULL,
  `resumo_evidencia` text,
  `evidencia_insuficiente` text,
  `observacao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `condicoes`
--

LOCK TABLES `condicoes` WRITE;
/*!40000 ALTER TABLE `condicoes` DISABLE KEYS */;
INSERT INTO `condicoes` VALUES (1,'Osteoartrite de Joelho','Joelho','Alívio da dor e melhora da função','Evidência moderada para redução de dor a curto prazo com crioterapia e calor superficial.','Efeito de longo prazo isolado é limitado sem exercícios.','Recomenda-se associar a fortalecimento muscular.'),(2,'Lombalgia Inespecífica','Coluna Lombar','Redução do espasmo muscular e alívio sintomático','Calor superficial moderadamente eficaz para alívio de curto prazo e relaxamento.','Frio geralmente mal tolerado na fase crônica.','Priorizar calor local se não houver inflamação aguda.'),(3,'Tendinopatia do Calcâneo','Tornozelo/Pé','Estímulo ao reparo tecidual e modulação da dor','Crioterapia usada para controle de dor pós-exercício excêntrico.','Evidência limitada sobre modificação estrutural do tendão.','Evitar gelo crônico antes de cargas mecânicas.'),(4,'Fibromialgia','Sistêmico','Relaxamento global e modulação central da dor','Banhos mornos e termoterapia superficial ajudam no relaxamento.','Modalidades térmicas profundas não alteram pontos gatilhos sistêmicos isoladamente.','Focar no conforto e adesão do paciente.'),(5,'Espasmo Muscular Cervical','Cervical','Vasodilatação e relaxamento da musculatura','Calor superficial promove alívio imediato da tensão.','Crioterapia pode aumentar o espasmo se a musculatura estiver enrijecida pelo frio.','Avaliar resposta individual ao calor.'),(6,'Epicondilite Lateral do Cotovelo','Cotovelo','Redução da inflamação crônica e alívio da dor','Uso pontual de crioterapia pós-esforço para controle álgico.','Baixa evidência de cura tecidual apenas com recursos térmicos.','Condição de caráter predominantemente mecânico.'),(7,'Fasceíte Plantar','Pé','Alívio da dor matinal e melhora da elasticidade','Uso de crioterapia (ex: rolar garrafa congelada) para dor aguda matinal.','Resultados variam consideravelmente entre pacientes.','Associar com alongamento da fáscia.'),(8,'Entorse Aguda de Tornozelo','Tornozelo','Controle do edema e analgesia na fase aguda','Crioterapia nas primeiras 48h é padrão para limitar edema e dor.','Uso prolongado pode retardar a cicatrização vascular.','Respeitar o limite de 15 a 20 minutos por aplicação.'),(9,'Bursite Trocantérica','Quadril','Redução da dor local e melhora da mobilidade','Crioterapia ou ultrassom para alívio da dor na região bursal.','Profundidade da bursa exige cuidado na escolha do recurso superficial.','Avaliar compressão local.'),(10,'Artrite Reumatóide (Fase não aguda)','Mãos/Articulações','Alívio da rigidez matinal e relaxamento','Parafina terapêutica ou banhos mornos reduzem a rigidez matinal.','Contraindicado calor em fases de surto inflamatório agudo.','Certificar-se de que a articulação não está quente ou avermelhada.');
/*!40000 ALTER TABLE `condicoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recursos`
--

DROP TABLE IF EXISTS `recursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recursos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo_str` varchar(50) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `descricao` text,
  `mecanismo` text,
  `certeza` varchar(50) DEFAULT NULL,
  `desfechos` text,
  `parametros_estudos` text,
  `contraindicacoes` text,
  `eventos_adversos` text,
  `referencias` text,
  `ultima_revisao` varchar(50) DEFAULT NULL,
  `cls` varchar(20) DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `codigo_str` (`codigo_str`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recursos`
--

LOCK TABLES `recursos` WRITE;
/*!40000 ALTER TABLE `recursos` DISABLE KEYS */;
INSERT INTO `recursos` VALUES (1,'crio_sup','Crioterapia (Bolsa de Gelo / Imersão)','Frio Superficial','Aplicação de frio para redução de temperatura tecidual e alívio álgico.','Vasoconstrição local e diminuição da velocidade de condução nervosa.','Moderada','Redução da dor aguda e controle inicial do edema.','15 a 20 minutos, com barreira de tecido.','Insensibilidade cutânea, Doença de Raynaud, crioglobulinemia.','Queimadura por frio, irritação cutânea.','Starkey C. Recursos Terapêuticos em Fisioterapia.','2026-01','c'),(2,'calor_sup','Compressa Quente / Hidrocolator','Calor Superficial','Uso de bolsas térmicas úmido-quentes para aquecimento tecidual superficial.','Vasodilatação local e aumento do metabolismo tecidual.','Moderada','Alívio de dor crônica e relaxamento muscular.','15 a 20 minutos, verificar pele na metade do tempo.','Áreas com inflamação aguda, tumores, alteração de sensibilidade.','Queimadura térmica, vermelhidão excessiva.','Cameron MH. Físico-Terapia: Agentes Físicos.','2026-01','o'),(3,'us_cont','Ultrassom Terapêutico Contínuo','Calor Profundo (1 e 3 MHz)','Ondas ultrassônicas com efeito térmico em tecidos profundos.','Aumento da extensibilidade do colágeno e vibração celular.','Moderada a Alta','Ganho de ADM e redução de rigidez em tecidos fibrosos.','1 a 2 W/cm², 5 a 10 minutos por área.','Placas epifisárias em crescimento, marcapasso, áreas de trombose.','Dor periosteal por excesso de intensidade.','Bussieres AE, et al.','2026-01',''),(4,'us_puls','Ultrassom Terapêutico Pulsado','Não Térmico / Mecânico','Efeitos não térmicos para reparo tecidual e modulação de edema.','Efeito cavitacional estável e microfluxo acústico.','Moderada','Aceleração do reparo tecidual em pós-operatório.','Modo pulsado 20%, 0.5 a 1.0 W/cm².','Áreas de infecção ativa e malignidade.','Raros quando aplicados corretamente.','Watson T. Electrotherapy: Evidence-Based Practice.','2026-01',''),(5,'ondas_curtas','Ondas Curtas (Diatermia)','Diatermia Profunda','Aquecimento profundo de grandes volumes musculares via campo eletromagnético.','Conversão de energia eletromagnética em calor profundo.','Baixa a Moderada','Relaxamento de grandes massas musculares profundas.','Duração de 20 minutos conforme sensação térmica.','Presença de metais implantados, gravidez, marcapasso.','Queimadura profunda se houver umidade ou falha no acoplagem.','Low J, Reed A. Eletroterapia Explicada.','2026-01',''),(6,'banho_contraste','Banho de Contraste','Térmico Alternado','Imersão alternada em água fria e quente.','Alternância de vasoespasmo e vasodilatação (efeito bomba vascular).','Baixa a Moderada','Redução de edema subagudo e melhora da sensação de peso.','Quente (3-4 min) / Frio (1 min), repetido por 20 min.','Insensibilidade vascular grave, feridas abertas.','Desconforto térmico transitório.','Korkmaz S, et al.','2026-01',''),(7,'infravermelho','Infravermelho','Calor Radiante','Lâmpada de radiação eletromagnética para aquecimento superficial.','Absorção de radiação infravermelha pela pele gerando calor superficial.','Baixa','Relaxamento pré-cinesioterapia.','15 minutos a uma distância segura de 50cm.','Olhos (proximidade facial), pele com distúrbios de sensibilidade.','Queimadura superficial se aproximado demais.','Kitchen S. Electrotherapy: Evidence-Based Practice.','2026-01',''),(8,'parafina','Parafina Terapêutica','Calor Superficial Local','Imersão em banho de cera de parafina derretida para mãos e pés.','Calor uniforme de baixa condutividade térmica.','Moderada','Alívio da rigidez articular crônica em pequenas articulações.','Técnica de imersão/repouso por 15 a 20 minutos.','Feridas abertas, infecções locais, pele sensível.','Maceração cutânea se a pele estiver suada/molhada.','Michlovitz SL. Thermal Agents in Rehabilitation.','2026-01','o');
/*!40000 ALTER TABLE `recursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tratamentos`
--

DROP TABLE IF EXISTS `tratamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tratamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_email` varchar(255) NOT NULL,
  `recurso` varchar(150) NOT NULL,
  `regiao_local` varchar(150) NOT NULL,
  `nivel_dor` int NOT NULL,
  `sintomas` text NOT NULL,
  `data_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tratamentos`
--

LOCK TABLES `tratamentos` WRITE;
/*!40000 ALTER TABLE `tratamentos` DISABLE KEYS */;
INSERT INTO `tratamentos` VALUES (4,'arturgame1234567@gmail.com','Frio','Costas ou lombar',7,'Vermelhidão','2026-11-16 22:27:21'),(5,'arturgame1234567@gmail.com','Frio','Ombro ou pescoço',10,'Vermelhidão','2026-11-16 22:31:30'),(6,'arturgame1234567@gmail.com','Frio','Ombro ou pescoço',9,'Dor aumentou','2026-11-17 20:11:16'),(7,'arturgame1234567@gmail.com','Frio','Costas ou lombar',3,'Nenhum','2026-11-17 20:26:24');
/*!40000 ALTER TABLE `tratamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `role` enum('p','f') NOT NULL,
  `sub_role` enum('paciente','profissional','estudante') NOT NULL,
  `crefito` varchar(50) DEFAULT NULL,
  `instituicao` varchar(100) DEFAULT NULL,
  `aprovado` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Artur','arturgame1234567@gmail.com','senhateste','p','paciente','','',0),(2,'Ana','anagamer@gmail.com','senhadiferente','p','paciente','','',0),(3,'joão','joaozin@gmail.com','123456','f','profissional','123456','',1),(4,'Silvana','silvana@gmail.com','silvana','f','profissional','silvana','',1),(5,'caio','caio@gmail.com','123456','f','estudante','','bh',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-17 17:46:08
