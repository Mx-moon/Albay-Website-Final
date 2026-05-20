// ================================================
//   DISCOVER ALBAY - Main JavaScript
// ================================================

// ---- DESTINATION DATA ----
const destinations = [
  {
    id: 1,
    name: "Mayon Volcano",
    municipality: "Legazpi City",
    category: "Mountain",
    image: "img/mayon.jpg",
    shortDesc: "The world's most perfect volcanic cone, an icon of Albay and all of the Philippines.",
    fullDesc: "Mayon Volcano is undoubtedly the most famous landmark in Albay and one of the most recognizable natural wonders in the Philippines. Famous for its nearly perfect conical shape, Mayon stands at 2,462 meters above sea level. It is an active stratovolcano whose slopes are lush with vegetation in its lower portions. Tourists from around the world come to photograph its majestic silhouette, especially during sunrise when the peak glows against the morning sky.",
    activities: ["Volcano trekking (with PHIVOLCS permit)", "ATV rides on the lava fields", "Photography and sightseeing", "Guided tour to base camps", "Camping at designated areas"],
    bestTime: "November to May (dry season)",
    entranceFee: "₱50 – ₱200 (varies by activity/area)",
    openingHours: "Open daily, trekking starts at 4:00 AM",
    travelTip: "Always check PHIVOLCS alerts. Trekking may be restricted during periods of volcanic activity.",
  },
  {
    id: 2,
    name: "Cagsawa Ruins",
    municipality: "Daraga",
    category: "Historical Site",
    image: "img/cagsawa.webp",
    shortDesc: "Historic church ruins buried by the 1814 eruption of Mayon Volcano.",
    fullDesc: "The Cagsawa Ruins are the remnants of an 18th-century Franciscan church that was destroyed by the 1814 eruption of Mayon Volcano. The eruption buried the town of Cagsawa and killed about 1,200 people who had sought refuge in the church. Today, only the church belfry and a few walls remain visible above ground, creating one of the most iconic images in the Philippines—the ruins framed against the perfect cone of Mayon Volcano.",
    activities: ["Historical sightseeing", "Photography with Mayon backdrop", "Museum visit at the site", "Souvenir shopping at nearby stalls", "Picnic at the park area"],
    bestTime: "Early morning for fewer crowds and better lighting",
    entranceFee: "₱20 – ₱30 per person",
    openingHours: "6:00 AM – 6:00 PM daily",
    travelTip: "Visit early in the morning for the best light and a clear view of Mayon Volcano behind the ruins.",
  },
  {
    id: 3,
    name: "Sumlang Lake",
    municipality: "Camalig",
    category: "Adventure",
    image: "img/lakedanao.jpg",
    shortDesc: "A serene lake offering stunning reflections of Mayon Volcano on calm mornings.",
    fullDesc: "Sumlang Lake is a peaceful freshwater lake located in Camalig, Albay. It is known for offering one of the most beautiful reflections of Mayon Volcano, especially during early morning when the water is still and the volcano is clearly visible. Visitors can rent bamboo rafts and kayaks to explore the lake while enjoying the scenic views.",
    activities: ["Bamboo raft cruising", "Kayaking", "Photography", "Birdwatching", "Lakeside dining at local restaurants"],
    bestTime: "Early morning for reflections; November to May",
    entranceFee: "Free entry; raft rental ₱100 – ₱200",
    openingHours: "Open daily 5:00 AM – 5:00 PM",
    travelTip: "Arrive before 7 AM for the most magical reflections of Mayon on the calm lake surface.",
  },
  {
    id: 4,
    name: "Lignon Hill Nature Park",
    municipality: "Legazpi City",
    category: "Mountain",
    image: "img/hiking.jpg",
    shortDesc: "A volcanic hill offering panoramic views of Mayon, Legazpi City, and the Pacific Ocean.",
    fullDesc: "Lignon Hill is a monogenetic volcanic hill in Legazpi City that offers one of the best panoramic views in Albay. From its peak, visitors can see the perfect cone of Mayon Volcano, the cityscape of Legazpi, and the blue expanse of the Pacific Ocean. The hill features hiking trails, a zipline ride, cable car, and various viewing platforms. It is a popular sunrise and sunset destination.",
    activities: ["Hiking trails to the summit", "Zipline ride", "Cable car ride", "360° viewing deck", "Sunrise/sunset photography"],
    bestTime: "Year-round; sunrise and sunset are spectacular",
    entranceFee: "₱30 – ₱50 entrance; rides extra",
    openingHours: "5:00 AM – 10:00 PM daily",
    travelTip: "Wear comfortable shoes for the hiking trail. The cable car is a great option if you prefer a leisurely ascent.",
  },
  {
    id: 5,
    name: "Misibis Bay",
    municipality: "Bacacay",
    category: "Beach",
    image: "img/beach1.jpg",
    shortDesc: "A premier beach resort known for crystal-clear waters and stunning island scenery.",
    fullDesc: "Misibis Bay Resort is one of the most famous beach destinations in Albay and in the Philippines. Located in Bacacay, it features a pristine white-sand beach, crystal-clear turquoise waters, and a backdrop of lush greenery and nearby islands. The resort offers world-class amenities and activities, making it a top choice for both local and international travelers.",
    activities: ["Swimming in crystal-clear waters", "Island hopping", "Snorkeling and scuba diving", "Water sports (kayaking, paddleboarding)", "Beach bonfire and dining"],
    bestTime: "October to June (calm seas and clear skies)",
    entranceFee: "Day use available; resort rates apply",
    openingHours: "Check-in/check-out per resort policy",
    travelTip: "Book in advance especially during peak season. Day-use packages are available if you are not staying overnight.",
  },
  {
    id: 6,
    name: "Daraga Church (Nuestra Señora de la Portería)",
    municipality: "Daraga",
    category: "Historical Site",
    image: "img/daragachurch.jpg",
    shortDesc: "An 18th-century Baroque church perched on a hill with a commanding view of Mayon.",
    fullDesc: "The Nuestra Señora de la Portería Parish Church, popularly known as Daraga Church, is one of the most important heritage churches in Albay. Built by Franciscan missionaries in 1773, the church is constructed from volcanic stone (andesite) and features Baroque architectural details. It sits atop a hill, offering a dramatic backdrop of Mayon Volcano. It was declared a National Cultural Treasure.",
    activities: ["Attending mass", "Heritage architecture tour", "Photography with Mayon backdrop", "Visit to the church museum"],
    bestTime: "Year-round; visit on Sunday for the full experience",
    entranceFee: "Free",
    openingHours: "5:00 AM – 7:00 PM daily",
    travelTip: "Dress respectfully when visiting the church. The best photo angle of the church with Mayon is from the road below.",
  },
  {
    id: 7,
    name: "Quitinday Hills",
    municipality: "Camalig",
    category: "Mountain",
    image: "img/quitunday.jpg",
    shortDesc: "Rolling green hills that rival Bohol's Chocolate Hills, carpeted with emerald grass.",
    fullDesc: "The Quitinday Hills in Camalig are a series of rolling, conical green hills that are often compared to the Chocolate Hills of Bohol. Locally known as the 'Green Hills of Albay,' these volcanic mounds create a stunning landscape, especially when lush with grass during the rainy season. The hills also offer a distant view of Mayon Volcano, making it doubly spectacular.",
    activities: ["Hiking through the hills", "Photography and landscape appreciation", "Picnicking", "Quad biking (seasonal availability)"],
    bestTime: "July to October for greenest hills; Nov–May for clearer Mayon views",
    entranceFee: "₱50 – ₱100 per person",
    openingHours: "6:00 AM – 5:00 PM daily",
    travelTip: "Bring good hiking shoes as trails can be muddy after rain. Sunrise visits offer the most dramatic lighting.",
  },
  {
    id: 8,
    name: "Sabang Beach",
    municipality: "Santo Domingo",
    category: "Beach",
    image: "img/sabang.jpg",
    shortDesc: "A dramatic dark volcanic sand beach with rolling waves and a raw, wild atmosphere.",
    fullDesc: "Sabang Beach in Santo Domingo is known for its distinctive dark volcanic sand, a characteristic feature of beaches near Mayon Volcano. The beach has strong waves that make it popular for surfing and bodyboarding. While not ideal for swimming for beginners, it offers a dramatic and raw coastal experience unlike the typical white sand beaches.",
    activities: ["Surfing and bodyboarding", "Beach walks and photography", "Sunset watching", "Camping by the shore"],
    bestTime: "December to March for surfing; anytime for scenery",
    entranceFee: "Free",
    openingHours: "Open 24 hours",
    travelTip: "Undertow can be strong. Non-swimmers should avoid going into the water. Perfect for photography during golden hour.",
  },
  {
    id: 9,
    name: "Ibalong Epic Tourism Zone",
    municipality: "Legazpi City",
    category: "Adventure",
    image: "img/ibalong.jpg",
    shortDesc: "A cultural and eco-adventure complex celebrating the Ibalong epic of Bicol.",
    fullDesc: "Inspired by the ancient Bicol epic poem 'Ibalong,' this tourism zone in Legazpi City celebrates the mythical heroes and legends of the Bicol people. It offers cultural exhibits, outdoor adventure activities, and educational experiences that immerse visitors in the rich folklore and heritage of the region. It is both an adventure zone and a living museum of Bicol culture.",
    activities: ["Cultural exhibits on Ibalong epic", "Eco-trail walks", "Adventure rope courses", "Local craft workshops", "Photography"],
    bestTime: "Year-round",
    entranceFee: "₱100 – ₱200 per person",
    openingHours: "8:00 AM – 5:00 PM (closed Mondays)",
    travelTip: "Great for school trips and families. Guided tours are highly recommended to fully appreciate the cultural context.",
  },
  {
    id: 10,
    name: "Mayon Skyline View Deck",
    municipality: "Legazpi City",
    category: "Mountain",
    image: "img/mayon.jpg",
    shortDesc: "One of the closest public view decks to Mayon Volcano's base, with cool mountain air.",
    fullDesc: "The Mayon Skyline View Deck is located at a higher elevation than most tourist spots, offering one of the closest and most dramatic views of Mayon Volcano. The cooler air, forested surroundings, and proximity to the volcano make it a popular destination for day-trippers seeking to feel the power of the volcano up close.",
    activities: ["Volcano viewpoints", "Cool mountain walks", "Photography", "Picnic areas"],
    bestTime: "Early morning for clearest views",
    entranceFee: "₱50 per person",
    openingHours: "6:00 AM – 5:00 PM daily",
    travelTip: "Bring a light jacket as it can get cool at this elevation, especially in the early morning.",
  },
  {
    id: 11,
    name: "Hoyop-Hoyopan Cave",
    municipality: "Camalig",
    category: "Adventure",
    image: "img/nature.jpg",
    shortDesc: "A limestone cave featuring remarkable stalactites, stalagmites, and rock formations.",
    fullDesc: "Hoyop-Hoyopan Cave in Camalig is one of the most beautiful natural caves in Albay. The cave's name means 'blown by wind' in Bicolano, reflecting the cool air that flows through it. Inside, visitors can marvel at impressive stalactites and stalagmites formed over thousands of years. Archaeological evidence suggests the cave was inhabited by prehistoric peoples.",
    activities: ["Guided cave exploration", "Photography of rock formations", "Archaeological site viewing", "Nature walks nearby"],
    bestTime: "Year-round (cooler inside even during summer)",
    entranceFee: "₱50 – ₱100 per person (guide included)",
    openingHours: "8:00 AM – 5:00 PM daily",
    travelTip: "Wear closed-toe shoes and bring a flashlight as backup. The guided tour is mandatory and very informative.",
  },
  {
    id: 12,
    name: "Peñaranda Park",
    municipality: "Legazpi City",
    category: "Adventure",
    image: "img/penaranda.jpg",
    shortDesc: "A well-maintained city park in Legazpi, perfect for a relaxing afternoon stroll.",
    fullDesc: "Peñaranda Park is a beloved public space in the heart of Legazpi City. It serves as a gathering place for locals and tourists alike. The park features well-maintained gardens, shaded benches, a fountain, and a bandstand. It is a great place to people-watch, relax, and get a feel for the everyday life of Legazpi residents.",
    activities: ["Leisure walks", "People-watching", "Photography", "Rest and relaxation", "Local food sampling nearby"],
    bestTime: "Late afternoon for cooler weather and lively atmosphere",
    entranceFee: "Free",
    openingHours: "Open 24 hours",
    travelTip: "Visit in the evening when locals come out for walks and the park has a vibrant community feel.",
  },
  {
    id: 13,
    name: "Busay Falls",
    municipality: "Malilipot",
    category: "Waterfall",
    image: "img/nature.jpg",
    shortDesc: "A refreshing natural waterfall surrounded by lush greenery.",
    fullDesc: "Busay Falls is a hidden natural attraction in Albay where visitors can relax in cool flowing waters surrounded by tropical vegetation. It is a peaceful destination perfect for nature lovers and adventure seekers.",
    activities: ["Swimming", "Nature photography", "Picnic", "Relaxation"],
    bestTime: "November to May",
    entranceFee: "₱20 per person",
    openingHours: "7:00 AM – 5:00 PM",
    travelTip: "Visit during the morning for cooler weather and fewer visitors.",
  },
  {
    id: 14,
    name: "Batan Island",
    municipality: "Rapu-Rapu",
    category: "Island",
    image: "img/beach1.jpg",
    shortDesc: "A peaceful island destination with beaches and scenic coastal views.",
    fullDesc: "Batan Island is known for its relaxing atmosphere, coastal scenery, and island lifestyle. Visitors can enjoy quiet beaches, local seafood, and beautiful ocean views.",
    activities: ["Island hopping", "Beach walking", "Photography", "Seafood dining"],
    bestTime: "March to June",
    entranceFee: "Free",
    openingHours: "Open daily",
    travelTip: "Bring sun protection and enjoy local seafood specialties.",
  },
];

// ---- GALLERY DATA ----
const galleryImages = [
  { src: "img/mayon.jpg",        caption: "Mayon Volcano — The world's most perfect cone" },
  { src: "img/background.jpg", caption: "Mayon Volcano — Iconic view from the plains" },
  { src: "img/spot1.jpg",      caption: "Mayon Volcano — Green fields in the foreground" },
  { src: "img/spot2.jpg",      caption: "Mayon Volcano — Cagsawa Ruins backdrop" },
  { src: "img/spot3.jpg",      caption: "Mayon Volcano — Aerial perspective" },
  { src: "img/spot4.jpg",      caption: "Mayon Volcano — Misty morning view" },
  { src: "img/spot5.jpg",      caption: "Mayon Volcano — Panoramic landscape" },
  { src: "img/spot6.jpg",      caption: "Mayon Volcano — Cloudy dramatic skies" },
  { src: "img/cagsawa.webp",   caption: "Cagsawa Ruins — 1814 eruption remnants" },
  { src: "img/daragachurch.jpg", caption: "Daraga Church — Built 1773 from volcanic stone" },
  { src: "img/heritage.webp",  caption: "Albay Heritage — Colonial architecture" },
  { src: "img/guinobatan.jpg", caption: "Guinobatan — Historical town of Albay" },
  { src: "img/beach1.jpg",     caption: "Misibis Bay — Crystal-clear turquoise waters" },
  { src: "img/bacacay.jpg",    caption: "Bacacay — Coastal scenery and islands" },
  { src: "img/sabang.jpg",     caption: "Sabang Beach — Wild volcanic waves" },
  { src: "img/santo.jpg",      caption: "Santo Domingo — Volcanic black sand shore" },
  { src: "img/quitunday.jpg",  caption: "Quitinday Green Hills — Rolling volcanic mounds" },
  { src: "img/lakedanao.jpg",  caption: "Sumlang Lake — Mayon reflection at dawn" },
  { src: "img/lignon.jpg",     caption: "Lignon Hill — Panoramic views of Legazpi" },
  { src: "img/hiking.jpg",     caption: "Lignon Hill — Hiking trail to the summit" },
  { src: "img/zipline.jpg",    caption: "Zipline — Aerial adventure with Mayon views" },
  { src: "img/adventure1.jpg", caption: "ATV Lava Field Ride — Mayon volcano base" },
  { src: "img/nature.jpg",     caption: "Hoyop-Hoyopan Cave — Ancient formations" },
  { src: "img/ibalong.jpg",    caption: "Ibalong Festival — Epic street dancing" },

  { src: "img/tabako.jpg",     caption: "Tabako Festival — Tabaco City celebration" },
  { src: "img/handicraft.jpg", caption: "Bicolano Handicrafts — Abaca and buri weaving" },
  { src: "img/cat1.jpg",       caption: "Bicol Express — The iconic spicy pork dish" },
  { src: "img/cat4.jpg",       caption: "Laing — Taro leaves in coconut milk" },
  { src: "img/local6.jpg",     caption: "Pinangat — Taro leaf wrapped specialty" },
  { src: "img/seafood1.jpg",   caption: "Fresh Seafood — Albay coastal catch" },
  { src: "img/seafood3.webp",  caption: "Grilled Seafood — Local coastal flavors" },
  { src: "img/seafood4.jpg",   caption: "Kinunot na Pagi — Stingray in coconut milk" },
  { src: "img/pili nut.webp",  caption: "Pili Nut Delicacies — Best Albay pasalubong" },
  { src: "img/legazpi.jpg",    caption: "Legazpi City — Capital of Albay" },
  { src: "img/jeepney.webp",   caption: "Jeepney — The iconic Philippine transport" },

];

// ---- RENDER DESTINATION CARDS ----
function renderDestinations(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (list.length === 0) {
    container.innerHTML = `<div class="col-12 no-results"><span>:(</span><p>No destinations found. Try a different search or category.</p></div>`;
    return;
  }
  container.innerHTML = list.map(d => `
    <div class="col-md-6 col-lg-4 mb-4 dest-item" data-id="${d.id}">
      <div class="dest-card h-100">
        <img src="${d.image}" alt="${d.name}" onerror="this.src='img/background.jpg'">
        <div class="dest-card-body">
          <span class="category-badge">${d.category}</span>
          <h5>${d.name}</h5>
          <div class="location">📍 ${d.municipality}, Albay</div>
          <p>${d.shortDesc}</p>
          <button class="btn-details" onclick="openModal(${d.id})">View Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- MODAL ----
function openModal(id) {
  const d = destinations.find(x => x.id === id);
  if (!d) return;
  document.getElementById('modalTitle').textContent = d.name;
  document.getElementById('modalBody').innerHTML = `
    <img class="modal-detail-img" src="${d.image}" alt="${d.name}" onerror="this.src='img/background.jpg'">
    <span class="modal-badge">${d.category} — ${d.municipality}, Albay</span>
    <p class="mb-3">${d.fullDesc}</p>
    <div class="modal-detail-row">
      <div class="modal-detail-item"><strong>Entrance Fee</strong>${d.entranceFee}</div>
      <div class="modal-detail-item"><strong>Opening Hours</strong>${d.openingHours}</div>
      <div class="modal-detail-item"><strong>Best Time</strong>${d.bestTime}</div>
    </div>
    <h6 class="fw-bold mt-3 mb-2" style="color:var(--primary)">Activities</h6>
    <ul class="modal-activities">${d.activities.map(a => `<li>${a}</li>`).join('')}</ul>
    <div class="mt-3 p-3 rounded" style="background:var(--light)">
      <strong>💡 Travel Tip:</strong> ${d.travelTip}
    </div>
  `;
  const modal = new bootstrap.Modal(document.getElementById('destModal'));
  modal.show();
}

// ---- SEARCH & FILTER (destinations page) ----
function initDestinationsPage() {
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  let activeCategory = 'All';

  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    const filtered = destinations.filter(d => {
      const matchCat = activeCategory === 'All' || d.category === activeCategory;
      const matchSearch = d.name.toLowerCase().includes(query)
        || d.municipality.toLowerCase().includes(query)
        || d.category.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });
    renderDestinations(filtered, 'destContainer');
  }

  if (searchInput) searchInput.addEventListener('input', applyFilters);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      applyFilters();
    });
  });

  renderDestinations(destinations, 'destContainer');
}

// ---- GALLERY LIGHTBOX ----
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = galleryImages.map((img, i) => `
    <div class="gallery-item" onclick="openLightbox(${i})">
      <img src="${img.src}" alt="${img.caption}" loading="lazy" onerror="this.src='img/background.jpg'">
      <div class="gallery-overlay"><span>🔍</span></div>
    </div>
  `).join('');
}

let currentLightboxIndex = 0;
function openLightbox(index) {
  currentLightboxIndex = index;
  const lb = document.getElementById('lightbox');
  lb.classList.add('active');
  updateLightbox();
}
function updateLightbox() {
  const img = galleryImages[currentLightboxIndex];
  document.getElementById('lbImg').src = img.src;
  document.getElementById('lbCaption').textContent = img.caption;
}
function closeLightbox() { document.getElementById('lightbox').classList.remove('active'); }
function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightbox();
}
function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
  updateLightbox();
}

// ---- FORM VALIDATION ----
function initForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  // Populate destination select
  const destSelect = document.getElementById('destination');
  if (destSelect) {
    destinations.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.name;
      opt.textContent = `${d.name} (${d.municipality})`;
      destSelect.appendChild(opt);
    });
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    function validate(fieldId, errId, condition, msg) {
      const err = document.getElementById(errId);
      if (!condition) {
        err.textContent = msg;
        err.classList.add('show');
        valid = false;
      } else {
        err.classList.remove('show');
      }
    }

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const dest = document.getElementById('destination').value;
    const travelDate = document.getElementById('travelDate').value;
    const visitors = parseInt(document.getElementById('visitors').value);
    const message = document.getElementById('message').value.trim();

    validate('fullname','errFullname', fullname.length > 1, 'Please enter your full name.');
    validate('email','errEmail', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), 'Please enter a valid email address.');
    validate('contact','errContact', /^\d{7,}$/.test(contact), 'Contact number must contain numbers only (at least 7 digits).');
    validate('destination','errDest', dest !== '', 'Please select a destination.');
    validate('travelDate','errDate', travelDate !== '', 'Please select a travel date.');
    validate('visitors','errVisitors', !isNaN(visitors) && visitors >= 1, 'Number of visitors must be at least 1.');
    validate('message','errMessage', message.length > 5, 'Please enter a message (at least 5 characters).');

    if (valid) {
      form.style.display = 'none';
      document.getElementById('formSuccess').classList.add('show');
    }
  });
}

// ---- ITINERARY PLANNER ----
function getCategoryMatches(category) {
  if (!category || category === 'All') return destinations.slice();
  return destinations.filter(d => d.category === category);
}

function uniquePick(list, count, usedSet) {
  const pool = list.filter(d => !usedSet.has(d.id));
  if (pool.length === 0) return [];
  const picks = [];
  while (picks.length < count && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    picks.push(pool[idx]);
    usedSet.add(pool[idx].id);
    pool.splice(idx, 1);
  }
  return picks;
}

function build3DayItinerary(interestCategory) {
  const matches = getCategoryMatches(interestCategory);

  // Fallback so we always have enough items.
  const fallback = destinations.slice();

  const used = new Set();
  const days = [];

  // Day templates: try to match interest picks, but keep itinerary varied.
  const dayRules = [
    { label: 'Day 1 — Iconic + Orientation', pick: 3, categoryBias: ['Mountain', 'Historical Site'] },
    { label: 'Day 2 — Nature + Adventure', pick: 3, categoryBias: ['Adventure', 'Mountain', 'Waterfall'] },
    { label: 'Day 3 — Views + Wind-down', pick: 2, categoryBias: ['Beach', 'Island', 'Adventure', 'Historical Site'] },
  ];

  for (let i = 0; i < dayRules.length; i++) {
    const rule = dayRules[i];

    let candidates = matches.length >= rule.pick ? matches : fallback;

    // If interest is All, bias toward rule categories.
    if (!interestCategory || interestCategory === 'All') {
      const biased = candidates.filter(d => rule.categoryBias.includes(d.category));
      if (biased.length >= rule.pick) candidates = biased;
    }

    const picks = uniquePick(candidates, rule.pick, used);

    // If still not enough, top up from fallback.
    if (picks.length < rule.pick) {
      const topUp = uniquePick(fallback, rule.pick - picks.length, used);
      picks.push(...topUp);
    }

    days.push({ label: rule.label, items: picks });
  }

  return days;
}

function renderItinerary(days) {
  const out = document.getElementById('itineraryOutput');
  if (!out) return;

  if (!days || days.length === 0) {
    out.innerHTML = '<div class="no-results">No itinerary could be generated. Try another interest.</div>';
    return;
  }

  out.innerHTML = `
    <div class="itinerary-grid">
      ${days.map((day, idx) => `
        <div class="itinerary-day card shadow-sm">
          <div class="itinerary-day-header">
            <div class="itinerary-day-badge">Day ${idx + 1}</div>
            <h4 class="itinerary-day-title">${day.label}</h4>
          </div>
          <div class="itinerary-day-body">
            ${day.items && day.items.length ? day.items.map(item => `
              <div class="itinerary-spot">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='img/background.jpg'">
                <div class="itinerary-spot-content">
                  <div class="itinerary-spot-name">${item.name}</div>
                  <div class="itinerary-spot-meta">📍 ${item.municipality}, Albay • ${item.category}</div>
                  <div class="itinerary-spot-tip">💡 ${item.travelTip}</div>
                </div>
              </div>
            `).join('') : '<p class="text-muted mb-0">No spots available.</p>'}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function initItineraryPlanner() {
  const btn = document.getElementById('btnGenerateItinerary');
  const interestSel = document.getElementById('tripInterest');
  const lengthSel = document.getElementById('tripLength');

  if (!btn || !interestSel || !lengthSel) return;

  const generate = () => {
    const interest = interestSel.value;
    const length = parseInt(lengthSel.value, 10);
    // Current version supports 3-day only.
    if (length !== 3) {
      renderItinerary([]);
      return;
    }
    const days = build3DayItinerary(interest);
    renderItinerary(days);
  };

  btn.addEventListener('click', generate);
  // Auto-generate once.
  generate();
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initDestinationsPage();
  initGallery();
  initForm();
  initItineraryPlanner();

  // Keyboard close for lightbox
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });
});

