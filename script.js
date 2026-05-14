// ==========================================
// 📽️ VERİLER (16 Film, 16 Dizi, 16 Anime)
// ==========================================
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    stars: 5,
    genres: ["Drama", "Crime"],
    poster: "https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    posterPosition: "50% 20%",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    reviews: [{ author: "John", rating: 5, text: "A masterpiece of cinema!", image: null }],
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    stars: 5,
    genres: ["Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg",
    posterPosition: "50% 20%",
    description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    reviews: [{ author: "Mike", rating: 5, text: "The greatest film ever made.", image: null }],
  },
  {
    id: 3,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    stars: 4,
    genres: ["Sci-Fi", "Action"],
    poster: "https://image.tmdb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    posterPosition: "50% 60%",
    description: "A thief who steals corporate secrets through dream-sharing technology.",
    reviews: [{ author: "Alice", rating: 5, text: "Mind-bending brilliance!", image: null }],
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    stars: 4,
    genres: ["Action", "Crime"],
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman raises the stakes in his war on crime.",
    reviews: [{ author: "Maddie", rating: 1, text: "I love spider-man more..", image: null }],
  },
  {
    id: 5,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    stars: 5,
    genres: ["Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    description: "The lives of two mob hitmen intertwine in unexpected ways.",
    reviews: [],
  },
  {
    id: 6,
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    stars: 5,
    genres: ["Drama", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    description: "An insomniac office worker forms an underground fight club.",
    reviews: [],
  },
  {
    id: 7,
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    stars: 5,
    genres: ["Drama", "Romance"],
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    description: "The presidencies of Kennedy and Johnson through the eyes of an Alabama man.",
    reviews: [],
  },
  {
    id: 8,
    title: "The Matrix",
    year: 1999,
    director: "Wachowskis",
    stars: 5,
    genres: ["Sci-Fi", "Action"],
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    posterPosition: "50% 20%",
    description: "A computer hacker learns the true nature of reality.",
    reviews: [],
  },
  {
    id: 9,
    title: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    stars: 4,
    genres: ["Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    posterPosition: "50% 20%",
    description: "The story of Henry Hill and his life in the mob.",
    reviews: [],
  },
  {
    id: 10,
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    stars: 5,
    genres: ["Sci-Fi", "Adventure"],
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    posterPosition: "50% 20%",
    description: "A team of explorers travel through a wormhole in space.",
    reviews: [],
  },
  {
    id: 11,
    title: "Parasite",
    year: 2019,
    director: "Bong Joon-ho",
    stars: 4,
    genres: ["Thriller", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    posterPosition: "50% 20%",
    description: "Greed and class discrimination threaten a symbiotic relationship.",
    reviews: [],
  },
  {
    id: 12,
    title: "The Silence of the Lambs",
    year: 1991,
    director: "Jonathan Demme",
    stars: 5,
    genres: ["Thriller", "Crime"],
    poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    posterPosition: "50% 20%",
    description: "A young FBI cadet seeks the help of an imprisoned cannibalistic psychiatrist.",
    reviews: [],
  },
  {
    id: 13,
    title: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    stars: 5,
    genres: ["Drama", "History"],
    poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    description: "The true story of Oskar Schindler during the Holocaust.",
    reviews: [],
  },
  {
    id: 14,
    title: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    stars: 5,
    genres: ["Action", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    posterPosition: "50% 20%",
    description: "A former Roman General sets out to exact vengeance.",
    reviews: [],
  },
  {
    id: 15,
    title: "The Prestige",
    year: 2006,
    director: "Christopher Nolan",
    stars: 5,
    genres: ["Drama", "Mystery"],
    poster: "https://image.tmdb.org/t/p/w500/bdN3gXuIZYaJP7ftKK2sU0nPtEA.jpg",
    description: "Two stage magicians engage in competitive one-upmanship.",
    reviews: [],
  },
  {
    id: 16,
    title: "Oppenheimer",
    year: 2023,
    director: "Christopher Nolan",
    stars: 5,
    genres: ["Drama", "History"],
    poster: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg",
    description: "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
    reviews: [],
  },
];

const series = [
  {
    id: 1,
    title: "Breaking Bad",
    year: 2008,
    director: "Vince Gilligan",
    stars: 5,
    genres: ["Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/original/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    posterPosition: "50% 40%",
    description: "A high school chemistry teacher turns to manufacturing methamphetamine.",
    reviews: [{ author: "Walter", rating: 5, text: "I am the one who knocks!", image: null }],
  },
  {
    id: 2,
    title: "Game of Thrones",
    year: 2011,
    director: "D. B. Weiss",
    stars: 4,
    genres: ["Fantasy", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    description: "Nine noble families fight for control of Westeros.",
    reviews: [],
  },
  {
    id: 3,
    title: "Stranger Things",
    year: 2016,
    director: "Duffer Brothers",
    stars: 5,
    genres: ["Sci-Fi", "Horror"],
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    description: "A young boy vanishes, uncovering supernatural forces.",
    reviews: [],
  },
  {
    id: 4,
    title: "The Witcher",
    year: 2019,
    director: "Lauren Schmidt",
    stars: 4,
    genres: ["Fantasy", "Action"],
    poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    posterPosition: "50% 20%",
    description: "Geralt of Rivia, a mutated monster-hunter for hire.",
    reviews: [],
  },
  {
    id: 5,
    title: "Dark",
    year: 2017,
    director: "Baran bo Odar",
    stars: 5,
    genres: ["Sci-Fi", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    description: "A family saga with a supernatural twist.",
    reviews: [],
  },
  {
    id: 6,
    title: "The Mandalorian",
    year: 2019,
    director: "Jon Favreau",
    stars: 5,
    genres: ["Sci-Fi", "Action"],
    poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    posterPosition: "50% 20%",
    description: "A lone bounty hunter in the outer reaches of the galaxy.",
    reviews: [],
  },
  {
    id: 7,
    title: "Peaky Blinders",
    year: 2013,
    director: "Steven Knight",
    stars: 5,
    genres: ["Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/original/bRQTLvu0EoRm946lweQKoPC6oBU.jpg",
    posterPosition: "50% 20%",
    description: "A notorious gang in 1919 Birmingham, England.",
    reviews: [],
  },
  {
    id: 8,
    title: "Chernobyl",
    year: 2019,
    director: "Johan Renck",
    stars: 5,
    genres: ["Drama", "History"],
    poster: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    posterPosition: "50% 90%",
    description: "The true story of the 1986 nuclear disaster.",
    reviews: [],
  },
  {
    id: 9,
    title: "The Crown",
    year: 2016,
    director: "Peter Morgan",
    stars: 5,
    genres: ["Drama", "History"],
    poster: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    posterPosition: "50% 20%",
    description: "The reign of Queen Elizabeth II.",
    reviews: [],
  },
  {
    id: 10,
    title: "Better Call Saul",
    year: 2015,
    director: "Vince Gilligan",
    stars: 5,
    genres: ["Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/original/2ZsZX9aq0WOEZNKjIAh7l4g6Ap2.jpg",
    description: "The transformation of Jimmy McGill into Saul Goodman.",
    reviews: [],
  },
  {
    id: 11,
    title: "Money Heist",
    year: 2017,
    director: "Álex Pina",
    stars: 5,
    genres: ["Crime", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    description: "A criminal mastermind plans the biggest heist.",
    reviews: [],
  },
  {
    id: 12,
    title: "The Office",
    year: 2005,
    director: "Greg Daniels",
    stars: 5,
    genres: ["Comedy"],
    poster: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
    posterPosition: "50% 20%",
    description: "A mockumentary on a group of office workers.",
    reviews: [],
  },
  {
    id: 13,
    title: "Friends",
    year: 1994,
    director: "David Crane",
    stars: 5,
    genres: ["Comedy", "Romance"],
    poster: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
    description: "Six friends living in Manhattan navigate life and love.",
    reviews: [],
  },
  {
    id: 14,
    title: "Sherlock",
    year: 2010,
    director: "Mark Gatiss",
    stars: 5,
    genres: ["Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
    posterPosition: "50% 20%",
    description: "A modern update finds the detective solving crimes.",
    reviews: [],
  },
  {
    id: 15,
    title: "Westworld",
    year: 2016,
    director: "Jonathan Nolan",
    stars: 4,
    genres: ["Sci-Fi", "Drama"],
    poster: "https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    description: "Set in a Wild West theme park populated by androids.",
    reviews: [],
  },
  {
    id: 16,
    title: "The Last of Us",
    year: 2023,
    director: "Craig Mazin",
    stars: 5,
    genres: ["Drama", "Action"],
    poster: "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg",
    description: "Joel and Ellie struggle to survive in a post-apocalyptic world.",
    reviews: [],
  },
];

const anime = [
  {
    id: 1,
    title: "Attack on Titan",
    year: 2013,
    director: "Hajime Isayama",
    stars: 5,
    genres: ["Action", "Dark Fantasy"],
    poster: "https://image.tmdb.org/t/p/original/7dHciFZJOI2FFwxwc3HAxp2vVPQ.jpg",
    posterPosition: "50% 70%",
    description: "Humanity lives inside cities surrounded by enormous walls due to the Titans.",
    reviews: [{ author: "Eren", rating: 5, text: "Shinzou wo Sasageyo!", image: null }],
  },
  {
    id: 2,
    title: "Death Note",
    year: 2006,
    director: "Tetsuro Araki",
    stars: 5,
    genres: ["Thriller", "Supernatural"],
    poster: "https://image.tmdb.org/t/p/original/chnG4pYo89weaBjXHJWvW68E35B.jpg",
    posterPosition: "50% 60%",
    description: "A high school student discovers a supernatural notebook.",
    reviews: [{ author: "İlayda", rating: 5, text: "Heartbreaking finale.", image: null }],
  },
  {
    id: 3,
    title: "Fullmetal Alchemist: Brotherhood",
    year: 2009,
    director: "Yasuhiro Irie",
    stars: 5,
    genres: ["Action", "Adventure"],
    poster: "https://image.tmdb.org/t/p/original/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
    posterPosition: "50% 35%",
    description: "Two brothers search for a Philosopher's Stone.",
    reviews: [],
  },
  {
    id: 4,
    title: "Demon Slayer",
    year: 2019,
    director: "Haruo Sotozaki",
    stars: 5,
    genres: ["Action", "Fantasy"],
    poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    posterPosition: "50% 40%",
    description: "A young boy becomes a demon slayer to save his sister.",
    reviews: [],
  },
  {
    id: 5,
    title: "One Punch Man",
    year: 2015,
    director: "Shingo Natsume",
    stars: 5,
    genres: ["Action", "Comedy"],
    poster: "https://image.tmdb.org/t/p/w500/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg",
    posterPosition: "50% 20%",
    description: "A hero who can defeat any opponent with one punch.",
    reviews: [{ author: "Gizem", rating: 5, text: "Last season is terrible", image: null }],
  },
  {
    id: 6,
    title: "My Hero Academia",
    year: 2016,
    director: "Kenji Nagasaki",
    stars: 5,
    genres: ["Action", "Superhero"],
    poster: "https://image.tmdb.org/t/p/w500/ivOLM47yJt90P19RH1NvJrAJz9F.jpg",
    description: "A boy born without superpowers dreams of becoming a hero.",
    reviews: [],
  },
  {
    id: 7,
    title: "Naruto Shippuden",
    year: 2007,
    director: "Hayato Date",
    stars: 5,
    genres: ["Action", "Adventure"],
    poster: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    posterPosition: "50% 20%",
    description: "Naruto's journey to become the strongest ninja.",
    reviews: [{ author: "Selin", rating: 5, text: "BEST ANIME IN THE WORLD!!!!", image: null }],
  },
  {
    id: 8,
    title: "Steins;Gate",
    year: 2011,
    director: "Hiroshi Hamasaki",
    stars: 5,
    genres: ["Sci-Fi", "Thriller"],
    poster: "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg",
    posterPosition: "50% 60%",
    description: "A group of friends discover time travel.",
    reviews: [],
  },
  {
    id: 9,
    title: "Hunter x Hunter",
    year: 2011,
    director: "Hiroshi Koujina",
    stars: 5,
    genres: ["Action", "Adventure"],
    poster: "https://image.tmdb.org/t/p/original/lVhM1HdJW8Yv07b20PDqTIlxGJi.jpg",
    posterPosition: "50% 25%",
    description: "A young boy searches for his father, a Hunter.",
    reviews: [],
  },
  {
    id: 10,
    title: "Jujutsu Kaisen",
    year: 2020,
    director: "Sunghoo Park",
    stars: 5,
    genres: ["Action", "Supernatural"],
    poster: "https://image.tmdb.org/t/p/original/eNWo1SAzHVnXNBYagafAm9yjMgJ.jpg",
    posterPosition: "50% 20%",
    description: "A boy swallows a cursed object and joins sorcerers.",
    reviews: [],
  },
  {
    id: 11,
    title: "Cowboy Bebop",
    year: 1998,
    director: "Shinichiro Watanabe",
    stars: 5,
    genres: ["Sci-Fi", "Action"],
    poster: "https://image.tmdb.org/t/p/original/xDiXDfZwC6XYC6fxHI1jl3A3Ill.jpg",
    description: "A ragtag crew of bounty hunters chase criminals.",
    reviews: [],
  },
  {
    id: 12,
    title: "Your Name",
    year: 2016,
    director: "Makoto Shinkai",
    stars: 5,
    genres: ["Romance", "Fantasy"],
    poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    posterPosition: "50% 60%",
    description: "Two teenagers share a profound, magical connection.",
    reviews: [],
  },
  {
    id: 13,
    title: "Spirited Away",
    year: 2001,
    director: "Hayao Miyazaki",
    stars: 5,
    genres: ["Fantasy", "Adventure"],
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    posterPosition: "50% 60%",
    description: "A girl enters a world ruled by gods and witches.",
    reviews: [],
  },
  {
    id: 14,
    title: "Mob Psycho 100",
    year: 2016,
    director: "Yuzuru Tachikawa",
    stars: 5,
    genres: ["Action", "Comedy"],
    poster: "https://image.tmdb.org/t/p/original/aFcv9zeJtSbJHSYUlQCOQYV3Gio.jpg",
    posterPosition: "50% 20%",
    description: "A psychic middle school boy tries to live a normal life.",
    reviews: [],
  },
  {
    id: 15,
    title: "Vinland Saga",
    year: 2019,
    director: "Shuhei Yabuta",
    stars: 5,
    genres: ["Action", "Historical"],
    poster: "https://image.tmdb.org/t/p/original/ySPYLN1sHmgRdqdfLOE092JlNTp.jpg",
    description: "A young Viking seeks revenge for his father's death.",
    reviews: [],
  },
  {
    id: 16,
    title: "Chainsaw Man",
    year: 2022,
    director: "Ryū Nakayama",
    stars: 5,
    genres: ["Action", "Horror"],
    poster: "https://image.tmdb.org/t/p/original/mIz0eKhzHuSPeRSePCyoCt9bKVp.jpg",
    posterPosition: "50% 40%",
    description: "Denji, a young man with devil powers, joins the Public Safety Devil Hunters.",
    reviews: [],
  },
];

// ==========================================
// 🔐 KULLANICI VERİLERİ (LocalStorage)
// ==========================================
let currentUser = null;

function getUsers() {
  const users = localStorage.getItem("entertainmentHubUsers");
  return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
  localStorage.setItem("entertainmentHubUsers", JSON.stringify(users));
}

function getCurrentUser() {
  const user = localStorage.getItem("entertainmentHubCurrentUser");
  return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem("entertainmentHubCurrentUser", JSON.stringify(user));
  } else {
    localStorage.removeItem("entertainmentHubCurrentUser");
  }
  currentUser = user;
}

// ==========================================
// 🔐 GİRİŞ/KAYIT FONKSİYONLARI
// ==========================================
function showAuthMessage(formId, message, isError = true) {
  const msgEl = document.getElementById(formId + "Message");
  msgEl.innerHTML = message;
  msgEl.className = "auth-message " + (isError ? "error" : "success");
  setTimeout(() => {
    msgEl.innerHTML = "";
    msgEl.className = "auth-message";
  }, 4000);
}

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!username || !password) {
    showAuthMessage("login", "Please fill in all fields!");
    return;
  }

  const users = getUsers();
  const user = users.find((u) => u.username.toLowerCase() === username.toLowerCase());

  if (!user) {
    showAuthMessage("login", "User not found!");
    return;
  }

  if (user.password !== password) {
    showAuthMessage("login", "Wrong password!");
    return;
  }

  setCurrentUser(user);
  showAuthMessage("login", "Login successful! Redirecting...", false);

  setTimeout(() => {
    showApp();
  }, 1000);
}

function handleRegister(e) {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirm = document.getElementById("registerConfirm").value;

  if (!username || !email || !password || !confirm) {
    showAuthMessage("register", "Please fill in all fields!");
    return;
  }

  if (username.length < 3) {
    showAuthMessage("register", "Username must be at least 3 characters!");
    return;
  }

  if (password.length < 4) {
    showAuthMessage("register", "Password must be at least 4 characters!");
    return;
  }

  if (password !== confirm) {
    showAuthMessage("register", "Passwords do not match!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showAuthMessage("register", "Please enter a valid email!");
    return;
  }

  const users = getUsers();

  if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
    showAuthMessage("register", "Username already exists!");
    return;
  }

  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    showAuthMessage("register", "Email already registered!");
    return;
  }

  const newUser = {
    id: Date.now(),
    username,
    email,
    password,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  showAuthMessage("register", "Account created! You can now sign in.", false);

  setTimeout(() => {
    document.querySelector('.login-tab[data-form="login"]').click();
  }, 1500);
}

function handleLogout() {
  setCurrentUser(null);
  hideApp();
}

function showApp() {
  document.getElementById("loginOverlay").classList.add("hidden");
  document.getElementById("appContainer").classList.add("active");
  updateWelcomeText();
}

function hideApp() {
  document.getElementById("loginOverlay").classList.remove("hidden");
  document.getElementById("appContainer").classList.remove("active");
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
}

function updateWelcomeText() {
  const welcomeEl = document.getElementById("welcomeText");
  if (currentUser) {
    welcomeEl.textContent = `Welcome, ${currentUser.username}`;
  } else {
    welcomeEl.textContent = "Welcome, Guest";
  }
}

// ==========================================
// 🔍 ARAMA FONKSİYONLARI
// ==========================================
let searchFilter = "all";
let searchQuery = "";

function performSearch() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  searchQuery = query;

  const clearBtn = document.getElementById("clearSearch");
  clearBtn.classList.toggle("visible", query.length > 0);

  if (query.length === 0) {
    hideSearchResults();
    return;
  }

  let results = [];

  if (searchFilter === "all" || searchFilter === "movies") {
    const movieResults = movies.filter((item) => matchesSearch(item, query));
    results = results.concat(movieResults.map((item) => ({ ...item, type: "movie" })));
  }

  if (searchFilter === "all" || searchFilter === "series") {
    const seriesResults = series.filter((item) => matchesSearch(item, query));
    results = results.concat(seriesResults.map((item) => ({ ...item, type: "series" })));
  }

  if (searchFilter === "all" || searchFilter === "anime") {
    const animeResults = anime.filter((item) => matchesSearch(item, query));
    results = results.concat(animeResults.map((item) => ({ ...item, type: "anime" })));
  }

  showSearchResults(results);
}

function matchesSearch(item, query) {
  const searchFields = [item.title, item.director, item.description, item.year.toString(), ...item.genres];
  return searchFields.some((field) => field.toLowerCase().includes(query));
}

function showSearchResults(results) {
  const container = document.getElementById("searchResults");
  const grid = document.getElementById("searchResultsGrid");
  const noResults = document.getElementById("noResults");
  const countEl = document.getElementById("resultsCount");
  const mainContent = document.getElementById("mainContent");

  container.classList.add("active");
  mainContent.style.display = "none";

  countEl.textContent = `${results.length} result${results.length !== 1 ? "s" : ""}`;

  if (results.length === 0) {
    grid.innerHTML = "";
    noResults.classList.add("active");
  } else {
    noResults.classList.remove("active");
    grid.innerHTML = results.map((item) => renderSearchCard(item, item.type)).join("");
  }
}

function hideSearchResults() {
  const container = document.getElementById("searchResults");
  const mainContent = document.getElementById("mainContent");

  container.classList.remove("active");
  mainContent.style.display = "block";
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("clearSearch").classList.remove("visible");
  hideSearchResults();
}

function renderSearchCard(item, type) {
  const position = item.posterPosition || "center";
  const typeLabel = type === "movie" ? "Movie" : type === "series" ? "Series" : "Anime";

  return `
    <div class="card ${type}" onclick="openModal(${item.id}, '${type}')">
      <span class="card-type-badge">${typeLabel}</span>
      <img class="card-poster" src="${item.poster}" alt="${item.title}" 
           style="object-position: ${position};" 
           onerror="this.style.display='none'">
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <div class="card-meta">
          <span>📅 ${item.year}</span>
          <span>🎬 ${item.director}</span>
        </div>
        <div class="stars">${showStars(item.stars)}</div>
        <p class="card-desc">${item.description}</p>
        <p class="click-hint">🔍 Click for details</p>
      </div>
    </div>
  `;
}

// ==========================================
// 🎨 RENDER FONKSİYONLARI
// ==========================================
let currentItem = null;
let currentType = null;
let selectedImage = null;

function showStars(count) {
  return "★".repeat(count) + "☆".repeat(5 - count);
}

function renderCard(item, type) {
  const position = item.posterPosition || "center";
  return `
    <div class="card ${type}" onclick="openModal(${item.id}, '${type}')">
      <img class="card-poster" src="${item.poster}" alt="${item.title}" 
           style="object-position: ${position};" 
           onerror="this.style.display='none'">
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <div class="card-meta">
          <span>📅 ${item.year}</span>
          <span>🎬 ${item.director}</span>
        </div>
        <div class="stars">${showStars(item.stars)}</div>
        <p class="card-desc">${item.description}</p>
        <p class="click-hint">🔍 Click for details</p>
      </div>
    </div>
  `;
}

function renderAll() {
  document.getElementById("moviesGrid").innerHTML = movies.map((m) => renderCard(m, "movie")).join("");
  document.getElementById("seriesGrid").innerHTML = series.map((s) => renderCard(s, "series")).join("");
  document.getElementById("animeGrid").innerHTML = anime.map((a) => renderCard(a, "anime")).join("");
}

// ==========================================
// 🔲 MODAL FONKSİYONLARI
// ==========================================
function openModal(id, type) {
  const data = type === "movie" ? movies : type === "series" ? series : anime;
  const item = data.find((i) => i.id === id);
  if (!item) return;

  currentItem = item;
  currentType = type;

  const modalPosition = item.modalPosterPosition || item.posterPosition || "center";
  document.getElementById("modalPoster").style.objectPosition = modalPosition;

  document.getElementById("modal").className = "modal " + type;
  document.getElementById("modalPoster").src = item.poster;
  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalMeta").innerHTML = `
    <span>📅 ${item.year}</span>
    <span>🎬 ${item.director}</span>
    <span>💬 ${item.reviews.length} comments</span>
  `;
  document.getElementById("modalStars").textContent = showStars(item.stars);
  document.getElementById("modalDesc").textContent = item.description;
  document.getElementById("modalGenres").innerHTML = item.genres.map((g) => `<span class="genre-tag">${g}</span>`).join("");

  renderReviews();
  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "auto";
  removeImage();
}

function renderReviews() {
  const list = document.getElementById("reviewList");
  if (currentItem.reviews.length === 0) {
    list.innerHTML = '<p style="color:var(--text-secondary);text-align:center;padding:20px;">No comments yet. Be the first to review!</p>';
  } else {
    list.innerHTML = currentItem.reviews
      .map(
        (r) => `
          <div class="review-item">
            <div class="review-header">
              <span class="review-author">${r.author}</span>
              <span class="review-rating">${showStars(r.rating)}</span>
            </div>
            <p class="review-text">${r.text}</p>
            ${r.image ? `<img class="review-image" src="${r.image}" alt="Review Image" onclick="openLightbox('${r.image}')">` : ""}
          </div>
        `
      )
      .join("");
  }
}

// ==========================================
// 📷 GÖRSEL İŞLEMLERİ
// ==========================================
function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB!");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      selectedImage = e.target.result;
      document.getElementById("imagePreview").src = selectedImage;
      document.getElementById("imagePreviewContainer").classList.add("active");
      document.getElementById("imageUploadArea").classList.add("has-image");
    };
    reader.readAsDataURL(file);
  }
}

function removeImage() {
  selectedImage = null;
  document.getElementById("reviewImage").value = "";
  document.getElementById("imagePreview").src = "";
  document.getElementById("imagePreviewContainer").classList.remove("active");
  document.getElementById("imageUploadArea").classList.remove("has-image");
}

function openLightbox(imageSrc) {
  document.getElementById("lightboxImage").src = imageSrc;
  document.getElementById("lightbox").classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

// ==========================================
// 📝 YORUM GÖNDERME
// ==========================================
function submitReview() {
  const name = document.getElementById("reviewName").value.trim();
  const text = document.getElementById("reviewText").value.trim();
  const rating = document.querySelector('input[name="rating"]:checked').value;

  if (!name || !text) {
    document.getElementById("formMessage").innerHTML = '<div style="color:var(--accent-movie);padding:10px;">Please fill in all fields!</div>';
    return;
  }

  currentItem.reviews.push({
    author: name,
    text: text,
    rating: parseInt(rating),
    image: selectedImage,
  });

  renderReviews();

  document.getElementById("reviewName").value = "";
  document.getElementById("reviewText").value = "";
  removeImage();

  document.getElementById("formMessage").innerHTML = '<div class="success-msg">✅ Your comment has been added!</div>';

  setTimeout(() => {
    document.getElementById("formMessage").innerHTML = "";
  }, 3000);
}

// ==========================================
// 🔄 EVENT LISTENERS
// ==========================================
document.querySelectorAll(".login-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".login-tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".auth-form").forEach((f) => f.classList.remove("active"));

    tab.classList.add("active");
    const formId = tab.dataset.form + "Form";
    document.getElementById(formId).classList.add("active");
  });
});

document.getElementById("loginForm").addEventListener("submit", handleLogin);
document.getElementById("registerForm").addEventListener("submit", handleRegister);
document.getElementById("logoutBtn").addEventListener("click", handleLogout);

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

document.getElementById("searchInput").addEventListener("input", performSearch);
document.getElementById("clearSearch").addEventListener("click", clearSearch);

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    searchFilter = btn.dataset.filter;
    if (searchQuery.length > 0) {
      performSearch();
    }
  });
});

document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeLightbox();
  }
});

// ==========================================
// 🚀 UYGULAMA BAŞLAT
// ==========================================
function init() {
  const savedUser = getCurrentUser();
  if (savedUser) {
    currentUser = savedUser;
    showApp();
  }
  renderAll();
}

init();
