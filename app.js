const form = document.getElementById('post-form');
const postIdInput = document.getElementById('post-id');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const postsContainer = document.getElementById('posts');

let posts = [];
try {
  posts = JSON.parse(localStorage.getItem('posts')) || [];
} catch (e) {
  console.error("Erro ao carregar posts:", e);
}

function saveToLocalStorage() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function renderPosts() {
  postsContainer.innerHTML = '';
  posts.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add(
      'p-4',
      'bg-gray-50',
      'dark:bg-gray-800',
      'rounded-lg',
      'shadow',
      'border',
      'border-gray-200',
      'dark:border-gray-700'
    );
    postElement.innerHTML = `
      <h2 class="text-xl font-semibold">${post.title}</h2>
      <p class="text-gray-700 dark:text-gray-200 mb-4">${post.content}</p>
      <div class="flex gap-2">
        <button 
          onclick="editPost(${index})" 
          class="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
        >Editar</button>
        <button 
          onclick="deletePost(${index})" 
          class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >Excluir</button>
      </div>
    `;
    postsContainer.appendChild(postElement);
  });
}

function editPost(index) {
  const post = posts[index];
  postIdInput.value = index;
  titleInput.value = post.title;
  contentInput.value = post.content;
}

function deletePost(index) {
  if (confirm('Deseja realmente excluir este post?')) {
    posts.splice(index, 1);
    saveToLocalStorage();
    renderPosts();
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const postId = postIdInput.value;
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  if (!title || !content) return;

  if (postId) {
    posts[postId] = { title, content };
  } else {
    posts.push({ title, content });
  }

  saveToLocalStorage();
  renderPosts();
  form.reset();
  postIdInput.value = '';
});

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', document.documentElement.classList.contains('dark') ? 'on' : 'off');
}

(function applySavedTheme() {
  if (localStorage.getItem('darkMode') === 'on') {
    document.documentElement.classList.add('dark');
  }
})();

renderPosts();
