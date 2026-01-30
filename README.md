# 🚀 Suíte de Extensões Corporativas

> Solução desenvolvida para centralizar e agilizar o acesso às ferramentas internas corporativas.
Estas extensões foram criadas pensando no meu atual ambiente corporativo.

## 💻 Ambiente e Compatibilidade

Este projeto foi desenvolvido nativamente em ambiente **Windows 11**, mas projetado com arquitetura **Cross-Platform**.

Graças à utilização do padrão **Manifest V3** e tecnologias Web (HTML/JS), estas extensões são **universalmente compatíveis** com qualquer Sistema Operacional e navegador baseado no motor **Chromium**.

* **Sistemas Operacionais Suportados:** Windows (10/11), Linux (Ubuntu, Debian, Mint, etc.) e macOS.
* **Navegadores Suportados:** Google Chrome, Microsoft Edge, Brave, Opera e Vivaldi.

---

## 🎥 Demonstração Visual
Veja abaixo o funcionamento das extensões:

[Demonstração da Extensão](https://github.com/user-attachments/assets/eb045129-0dc4-4529-9f32-2e6a737f131d)

---
## 🛠️ Estrutura Técnica do Projeto

O desenvolvimento seguiu as melhores práticas exigidas pelas políticas modernas de segurança de navegadores:

1.  **Core (Manifest V3):** Arquivo de configuração que define permissões e garante a segurança da execução.
2.  **Frontend (HTML5 & CSS3):** Interface visual leve, desenhada para se integrar nativamente à barra do navegador.
3.  **Backend Logic (JavaScript):** Script responsável pelo gerenciamento de eventos e redirecionamento seguro (HTTPS).

---

## 📥 Guia de Instalação (Manual)

Como se trata de uma ferramenta interna ainda não publicada na loja, a instalação é feita via *Sideloading*. O processo é idêntico para Windows e Linux:

1.  **Baixe o Projeto:** Faça o download deste repositório (Botão **Code** > **Download ZIP**) e extraia a pasta.
2.  **Acesse o Gerenciador:** No seu navegador, digite na barra de endereços:
    * `chrome://extensions` (para Chrome)
    * `brave://extensions` (para Brave)
    * `edge://extensions` (para Edge)
3.  **Ative o Modo Desenvolvedor:**
    * ⚠️ **Passo Obrigatório:** Localize a chave **"Modo do desenvolvedor"** (geralmente no canto superior direito) e ative-a.
4.  **Carregue a Extensão:**
    * Clique no botão **"Carregar sem compactação"** (Load Unpacked).
    * Selecione a pasta da extensão desejada (ex: `magalu-extension` ou `kabum-extension`).

> **Nota:** Ao reiniciar o navegador, um aviso de segurança sobre "extensões em modo desenvolvedor" pode ser exibido. Isso é um comportamento padrão do navegador para extensões instaladas manualmente.

---

## 🏢 Estratégias de Distribuição Corporativa

Para implementação em larga escala na empresa, este projeto suporta três métodos de distribuição documentados:

### 1. Sideloading (Método Atual/Dev)
* **Custo:** Zero.
* **Prós:** Rápido de implementar, sem burocracia.
* **Contras:** Requer instalação manual em cada máquina e exibe avisos de segurança do navegador.

### 2. Google Chrome Web Store (Recomendado para Facilidade)
* **Custo:** Taxa única de US$ 5,00 (aprox. R$ 30,00).
* **Como funciona:** Publicamos a extensão como "Privada" (visível apenas para e-mails do domínio da empresa) ou "Não listada".
* **Vantagem:** Instalação automática, atualizações fáceis e **remove o aviso de modo desenvolvedor**.

### 3. Self-Hosting em Servidor Próprio (Método Enterprise)
* **Custo:** Zero (usa infraestrutura existente).
* **Requisitos:** Acesso a um servidor HTTPS da empresa e configuração de políticas de grupo (GPO).
* **Como funciona:**
    1.  Empacota-se a extensão em um arquivo `.crx`.
    2.  Hospeda-se o `.crx` e um arquivo `updates.xml` no servidor interno.
    3.  A equipe de TI configura o Google Admin ou Registro do Windows para forçar a instalação nas máquinas dos colaboradores.

---
## 📄 Documentação Completa
Para ver o manual técnico detalhado e o passo a passo ilustrado, acesse nossa página oficial:

[![Ver Documentação](https://img.shields.io/badge/📖_Ler_Documentação-Acessar_Site-blue?style=for-the-badge)](https://dannyrodrygues.github.io/chrome-extensions-collection/)

---
*Desenvolvido por Daniella Rodrigues ☕*
