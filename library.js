 const books = [
     {
        title: " NEWTON'S LAWS OF MOTION",
        author: "PROF. RASHAD BADRAN",
        year: "2009",
        cover: "BOOKS/ALL-NEWTON.jpg",
        pdf: "BOOKS/All-Newton Laws-Physics 101.pdf"
      },

      {
        title: "GRADE 12 PHYSICAL SCIENCES",
        author: "SIYAVUYA",
        year: "2012",
        cover: "BOOKS/Grade12_Physical Science.jpg",
        pdf: "BOOKS/Gr12_PhysicalSciences_Learner_Eng.pdf"
      },

      {
        title: "GRADE 12 HISTORY",
        author: "Sue Grové, C.G. Weldon, J. Manenzhe, B.A. Proctor, P.C.J. Vale, VIA AFRIKA",
        year: "2020",
        cover: "BOOKS/Grade12-History.jpg",
        pdf: "BOOKS/Gr12-History-Study-Guide_LR.pdf"
      },

      {
        title: "The History Of South Africa",
        author: "Leonard Thompson",
        year: "2001",
        cover: "BOOKS/Leonard_M.jpg",
        pdf: "BOOKS/leonard_monteath_thompson_a_history_of_south_afrbook4me.org_.pdf"
      },

      {
        title: "UNDERSTANDING SOUTH AFRICA'S DEMOCRATIC TRAJECTORY",
        author: "Mapungubwe Institute for Strategic Reflection",
        year: "2020",
        cover: "BOOKS/OSFSA.jpg",
        pdf: "BOOKS/OSFSA-complete-book.pdf"
      },

      {
        title: "From Apartheid to Democracy the Struggle for Liberation in South Africa",
        author: "APARTHEID MUSEUM",
        year: "1994",
        cover: "BOOKS/FROM_APARTHEID.jpg",
        pdf: "BOOKS/From_Apartheid_To_Democracy.pdf"
      },

      {
        title: "HOW TO START A BUSINESS",
        author: "UNIVERSITY OF GEORGIA",
        year: "2016",
        cover: "BOOKS/HOW START A BUSINESS.jpg",
        pdf: "BOOKS/How-to-Start-a-Business-Booklet.pdf"
      },

      {
        title: "BE YOUR OWN BOSS - BIG IDEAS WALES",
        author: "SMITH",
        year: "2023",
        cover: "BOOKS/COMPRESSED_START_UP.jpg",
        pdf: "BOOKS/compressed_start_up_2.pdf"
      },

       {
        title: "SKY RIDER - FOR KIDS (3 - 9 YEARS)",
        author: "SMITH",
        year: "2024",
        cover: "BOOKS/8-SKY RIDER.jpg",
        pdf: "BOOKS/8-SkyRide-by-Starfall.pdf"
      },

      {
        title: "THERE'S A SPIDER IN MY HAIR",
        author: "A.BOGIE",
        year: "2025",
        cover: "BOOKS/CIS-BOOK SPIDER.jpg",
        pdf: "BOOKS/CIS-Book-LowResAW-JUN19-2.pdf"
      },

      {
        title: "SPIDER",
        author: "SPIDER",
        year: "2025",
        cover: "BOOKS/CIS-BOOK SPIDER.jpg",
        pdf: "BOOKS/CIS-Book-LowResAW-JUN19-2.pdf"
      },


      {
        title: "SKY RIDER",
        author: "SKY",
        year: "2025",
        cover: "BOOKS/8-SKY RIDER.jpg",
        pdf: "BOOKS/8-SkyRide-by-Starfall.pdf"
      }
    ];

    function displayBooks(filter = "") {
      const grid = document.getElementById("bookGrid");
      const search = filter.toLowerCase();
      grid.innerHTML = "";

      books
        .filter(book =>
          book.title.toLowerCase().includes(search) ||
          book.author.toLowerCase().includes(search) ||
          book.year.includes(search)
        )
       .forEach(book => {
          const div = document.createElement("div");
          div.className = "book";
          div.innerHTML = `
            <img src="${book.cover}" alt="${book.title}" />
            <h4>${book.title}</h4>
            <p>${book.author} • ${book.year} </p>
            <button onclick="readBook('${book.pdf}')">Read Book</button>
          `;
          grid.appendChild(div);
        });
    }

    function readBook(pdfUrl) {
      const iframe = document.getElementById("reader");
      iframe.src = pdfUrl;
      iframe.style.display = "block";
      window.scrollTo({ top: iframe.offsetTop, behavior: "smooth" });
    }

    document.getElementById("searchBar").addEventListener("input", e => {
      displayBooks(e.target.value);
    });

   
    displayBooks();
