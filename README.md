
# 📘 Projeto: Blog CRUD com TailwindCSS e Modo Escuro

Este é um projeto simples de Blog CRUD (Create, Read, Update, Delete) feito com HTML, JavaScript e TailwindCSS. Ele permite que o usuário crie, edite, visualize e exclua posts armazenados no navegador via `localStorage`. Também possui suporte a **modo escuro**, com alternância manual e persistência da preferência.

---

## 🛠️ Funcionalidades

- ✅ Criar posts com título e conteúdo
- ✅ Editar posts existentes
- ✅ Excluir posts com confirmação
- ✅ Armazenamento persistente com `localStorage`
- ✅ Modo escuro com TailwindCSS
- ✅ Preferência de tema salva no `localStorage`
- ✅ Estilização moderna com Tailwind

---

## 📁 Estrutura dos Arquivos

```
📂 blog_crud_dark_mode/
├── index.html       # Estrutura da página com Tailwind e modo escuro
└── app.js           # Lógica do CRUD e alternância de tema
```

---

## 🌙 Modo Escuro

- Habilitado usando `darkMode: 'class'` via CDN
- Alternado manualmente com botão "Alternar tema"
- Preferência salva no `localStorage` (`darkMode: on/off`)
- Aplicado via `document.documentElement.classList.toggle('dark')`

---

## 💾 Armazenamento com localStorage

- Os posts são armazenados em `localStorage` com a chave `"posts"`
- Os dados são carregados e renderizados ao abrir a página
- Atualizações são salvas automaticamente ao adicionar, editar ou excluir

---

## 🚀 Como usar

1. Abra o `index.html` no navegador
2. Preencha título e conteúdo do post e clique em **"Salvar Post"**
3. Edite ou exclua os posts conforme desejar
4. Use o botão no topo para alternar entre modo claro/escuro

---

## 📦 Tecnologias utilizadas

- HTML5
- JavaScript (ES6)
- TailwindCSS (via CDN)
- Web Storage API (localStorage)

---

## 📌 Sugestões futuras

- Deploy com GitHub Pages ou Vercel
- Integração com backend (ex: Firebase)
- Autenticação de usuário
- Filtro ou busca de posts
- Página de visualização individual para cada post

---

Criado por: Ygor Vinícius Pereira Nunes  
Instagram: [@nunesygor96](https://instagram.com/nunesygor96)
