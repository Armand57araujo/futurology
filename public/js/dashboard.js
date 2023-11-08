async function handlePostSubmit (e) {
    e.preventDefault()

const title = document.querySelector('#title').value.trim();
const body = document.querySelector('#body').value.trim();
 

  if (title && body) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content:body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  };
}
// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

// document
//   .querySelector('.new-post-form')
//   .addEventListener('submit', newFormHandler);


document.querySelector("#btn")
.addEventListener("click", handlePostSubmit)



// const loginFormHandler = async (event) => {
//     event.preventDefault();

//     const title = document.querySelector('#title').value.trim();
//     const description = document.querySelector('#body').value.trim();
//     console.log(title, description)
//     if (title && description) { 

//       const response = await fetch('/api/posts', {
//         method: 'POST',
//         body: JSON.stringify({ title, description }),
//         headers: { 'Content-Type': 'application/json' },

//       });

//       if (response.ok) {
//          document.location.replace('/dashboard');
//       } else {
//         alert('Failed to create a post.');
//       }
//     }
//   };


//   document
//   .querySelector('#submit')
//   .addEventListener('click', loginFormHandler);

















































// const submitButton = document.querySelector("#dashboardSubmission");
// const titleInput = document.querySelector("#titleInput");
// const textContent = document. querySelector ("#textContent");

// submitButton.addEventListener("click", async function(){

//     const title = titleInput.value;

//     const text = textContent.value;
//     const response = await fetch("/api/posts",
//     method: 'POST',
//     body: JSON.stringify({ title, text }),

//     headers: ('Content-Type': 'application/json'),

// });
//     document. location replace(' /dashboard');
//     alert('Failed to create


// }
