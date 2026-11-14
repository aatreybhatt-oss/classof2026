const classmates = [
    {
        id: "nick",
        name: "Nick Marino",
        bio: "Nick is a heavy bass extraordinaire, known for his innovative sound design. An accomplished producer and DJ, he has a knack for creating unique audio experiences.",
        projectTitle: "Redline2Headline",
        projectDescription: "The most-voted distortion plugin of 2026, designed for extreme bass textures. Multiple distortion algorithms and a skin in collaboration with box of frogs.",
        youtubeId: "6ikOL9Gv-x4",
        portraitUrls: ["images/nick_1.png", "images/nick_2.jpg", "images/nick_3.jpg"], // Add all your images here
        projectLink: "https://google.com",
        socialLink: "https://www.instagram.com/nick.marino13/"
    },
    {
        id: "alejandro",
        name: "Alejandro Garcia",
        bio: "Alejandro is a Peruvian songwriter and producer who explores his journey of self discovery through his music.",
        projectTitle: "Opia",
        projectDescription: "Alejandro explores his journey of self discovery through this LP.",
        youtubeId: "vwjBvYocbtI",
        portraitUrls: ["images/alejandro_1.png", "images/alejandro_2.jpg", "images/alejandro_3.jpg"], // Add all your images here
        projectLink: "https://google.com",
        socialLink: "https://www.instagram.com/4lej4ndro.wav/"
    },
    {
        id: "pipo",
        name: "Pipo Fernandez",
        bio: "Pipo is a a singer songwriter and producer from the Philippines.",
        projectTitle: "Long Way Home",
        projectDescription: "Long Way home is an album where Pipo documents his grief, nostalgia, self worth and navigating life",
        youtubeId: "tIw4EpnyUYo",
        portraitUrls: ["images/pipo_1.png", "images/pipo_2.jpg", "images/pipo_3.jpg"], // Add all your images here
        projectLink: "https://google.com",
        socialLink: "https://www.instagram.com/pipopottamus_/"
    },
    {
        id: "aatrey",
        name: "Aatrey Bhatt",
        bio: "Aatrey is a music producer and engineer from India.",
        projectTitle: "Fatakda",
        projectDescription: "Fatakda is an audio-reactivev visualizer app that can take live audio input and generate visuals and visuals that animate and sync to the music being played in real time",
        youtubeId: "xhgIOlw2YUk",
        portraitUrls: ["images/aatrey_1.jpg", "images/aatrey_2.jpg", "images/aatrey_3.jpg",], // Add all your images here
        projectLink: "https://github.com/aatreybhatt-oss/fatakda",
        socialLink: "https://www.instagram.com/jacktheriffer/"
    },
    {
        id: "arturo",
        name: "Arturo Angarita",
        bio: "Arturo Angarita is a Colombian electronic music producer, DJ, and live audiovisual performer based in Madrid, Spain. Drawing on years of experience in electronic music, his work blends elements of House, Progressive, Trance, and Techno into immersive experiences driven by hypnotic grooves, emotional progression, and colorful soundscapes. Alongside his DJ sets, Arturo presents a live electronic performance combining original music, hardware synthesizers, and self-designed generative visuals, creating audiovisual experiences where sound and image evolve together in real time.",
        projectTitle: "Onda Expansiva",
        projectDescription: "Onda Expansiva is a live audiovisual electronic performance built around a 7-track album and a custom audio-reactive video synthesizer. Through original music, live interaction, and abstract visuals, the project explores an emotional journey inspired by movement, transformation and contrast.",
        youtubeId: "rsosJIJobc4",
        portraitUrls: ["images/arturo_1.jpg", "images/arturo_2.jpg", "images/arturo_3.jpg"], // Add all your images here
        projectLink: "https://www.youtube.com/watch?v=MSPGPPeRwLc",
        socialLink: "https://www.instagram.com/arturoangaritamusic/"
    },
    {
        id: "camilo",
        name: "Camilo Chamorro",
        bio: "Music producer, singer, songwriter and creative. Camilo comes from diverse influences all around music and technology, with a wide experience on live events, djing and performing. He has built a strong sense of community within the people who listen to his music and identifies with his message.",
        projectTitle: "Café Para Llevar",
        projectDescription: "A five song EP combining multimedia content from songs and videos that showcases genres across all the americas in different and new ways.",
        youtubeId: "P4ViYjs2dqQ",
        portraitUrls: ["images/camilo_1.jpg", "images/camilo_2.jpg", "images/camilo_3.jpg"], // Add all your images here
        projectLink: "https://drive.google.com/drive/folders/1oT_-1PUp7ogsVJUouhWiAVU_xXG86LLV?usp=sharing",
        socialLink: "https://www.instagram.com/its.chamo/"
    },
    {
        id: "sam",
        name: "Sam Vivian",
        bio: "Sam Vivian is a bassist, guitarist, producer, and engineer based in Valencia, Spain, working across video game soundtracks, chiptune, and instrumental music. His cross-disciplinary practice integrates music production and sound design with original visual art, extending into the design of interactive audiovisual environments. Vivian plays and records bass with the Berklee Valencia MPTI 2026 team and previously performed with San Francisco-based Northstar Cafe (The Living Room). He holds a Master of Music in Music Production, Technology, and Innovation from Berklee Valencia. Box of Frogs, his current project, is a nine-track instrumental album — the foundational soundtrack to a larger audiovisual world.",
        projectTitle: "Box of Frogs",
        projectDescription: "Box of Frogs is a nine-track instrumental album paired with an original vector cover illustration — and the first chapter of a larger audiovisual project I'm building outward from the music itself. Each track functions as its own emotional environment: a frog pond home base, a nostalgic jungle, an aching desert, an unraveling city, and a series of interior terrains that trace the arc of a personal journey from recovery through overreach and back down again. The record was produced under a self-imposed methodological constraint — instruments I already owned, and a single Shure SM57 for every microphone capture — a limitation that shaped the album's unified sonic identity as much as the compositions themselves.What's next: the album's tracks become navigable levels in an interactive audiovisual world built in Wwise and Godot, where musical layers respond to player movement and rhythm. Live performance and further visual development will grow outward from the record. Box of Frogs isn't a soundtrack. The music defines the world; everything else grows from it.",
        youtubeId: "orVV3Co0L2I",
        portraitUrls: ["images/sam_1.jpg", "images/sam_2.jpg", "images/sam_3.jpg"], // Add all your images here
        projectLink: "https://drive.google.com/drive/folders/1oT_-1PUp7ogsVJUouhWiAVU_xXG86LLV?usp=sharing",
        socialLink: "https://www.instagram.com/sam_vivs"
    },
    {
        id: "alice",
        name: "Alice O’Conor",
        bio: "Alice Joan is an Irish-French music producer, songwriter, and sound engineer working in alternative pop. Her work blends electronic production with the warmth and texture of recorded acoustic instruments, while also placing strong emphasis on polished and creative vocal production. Drawing on her multicultural background and technical expertise, she approaches music as both a writer and a sonic architect, shaping emotionally driven songs from the earliest ideas through to final production.",
        projectTitle: "Flammable: a nine song album",
        projectDescription: "Flammable is an album that blends electronic and acoustic elements, which is rooted in her artistic and cultural identity. This album touches on themes such as relationships, loss, and self-doubt, and aims to reconnect people with their emotions and human rawness.",
        youtubeId: "anAyjpB72Dc",
        portraitUrls: ["images/alice_1.jpg", "images/alice_2.jpg", "images/alice_3.jpg"], // Add all your images here
        projectLink: "https://docs.google.com/document/d/17untsOmE2ZEyst2zP3q8rFlFyXt0pZwij9o6oGN1z14/edit?usp=sharing",
        socialLink: "https://www.instagram.com/_alice_joan_/"
    },
    {
        id: "najwa",
        name: "Najwa Al Aswad",
        bio: "Najwa Al-Aswad is a Lebanese-American DJ and music producer currently residing in Madrid, Spain. She blends Arabic rhythms, global grooves, and deep electronic textures to create genre-fluid sets that move both heart and body. Drawing from a decade of experience behind the decks and a background in community organizing and music production, her sound spans house, techno, jungle, and diasporic bass. Whether in intimate settings or on big systems, she curates with care, weaving together music that uplifts and connects.",
        projectTitle: "Silim: A 6 Track EP of Lebanese heritage synthesis in  Electronic Music",
        projectDescription: "Silim is a six-track EP produced entirely in Ableton Live. The project unfolds as a transnational sonic dialogue across Beirut, Boston, and Valencia — three cities that mark the author's diasporic geography — and is structured as a narrative arc moving from inherited trauma toward reimagined futures. Each track was conceived as a site of sonic witnessing, where archival materials, original composition, and collaborative performance converge. The author sourced field recordings and documentary audio from archives including the American University of Beirut's refugee archive and vintage Lebanese documentary footage. These archival layers were processed, warped, and resampled in Ableton Live, transforming historical residue into living compositional material.",
        youtubeId: "GopUfRcDF3k",
        portraitUrls: ["images/najwa_1.jpg", "images/najwa_2.png", "images/najwa_3.png"], // Add all your images here
        projectLink: "https://najwaalaswad.bandcamp.com/album/silim",
        socialLink: "https://www.instagram.com/najwa_al_aswad/"
    },
    {
        id: "adi",
        name: "Adi Orion",
        bio: "Adi Orion – Singer, voice researcher, songwriter, and music producer. I tell stories, love words, and create spaces of connection for people with one another and with themselves. My music blends roots embedded in Hebrew and Middle Eastern folk with far-reaching branches of many genres and cultures - drawing influences from British and American folk, jazz, gospel elements, and traditions of communal singing. I sing in both Hebrew and English, cherish human connection, believe in peace and humanity, and combine vocal virtuosity with accessible storytelling and an open heart for all. My performances are an opportunity for a sincere, direct encounter with imperfection, grief, celebration, and the community that binds it all together. I opened shows for Ehud Banai and Amir Lev, and have been performing in Israel and around the world for years (Europe, USA, India). I hold a bachelor's degree in multi-disciplinary vocal studies from the Jerusalem Academy of Music and Dance, and a master's degree in Music Production, Technology and Innovation (MPTI) from Berklee Valencia.",
        projectTitle: "Mechadash - From the Start / Album",
        projectDescription: "Adi Orion’s third album, Mechadash (From the Start), is a twelve-track collection exploring identity within a fragmented reality. Written in Hebrew and English, the mostly acoustic album was produced by Orion and recorded with live instruments alongside musicians from around the world. Blending folk traditions, communal singing, jazz, Arabic music, and singer-songwriter influences, the album reflects Orion’s Hebrew, Jewish, and Middle Eastern roots while embracing a universal musical language.",
        youtubeId: "i3L62Rqp1GY",
        portraitUrls: ["images/adi_1.jpg", "images/adi_2.jpg", "images/adi_3.jpg"], // Add all your images here
        projectLink: "https://docs.google.com/document/d/1hBOZzclBBUkekrJzSwdoeLJh6qlP40gnXI1iQNRjIOY/edit?usp=sharing",
        socialLink: "https://www.instagram.com/adiorion/"
    }
    // ADD EVERY OTHER STUDENT HERE FOLLOWING THE SAME FORMAT
];
