/* ==========================================================================
   ZENTRO — script.js
   Handles: product rendering, category filter, live search, sorting,
   cart, wishlist, product modal, drawers, newsletter, toasts, persistence.
   ========================================================================== */

(function () {
  'use strict';

  /* ---------------------------------------------------------------------
     PRODUCT DATA
  --------------------------------------------------------------------- */
  const PRODUCTS = [
    {
      id: 'p01', name: 'Aether Wireless Headphones', category: 'Electronics',
      price: 129.99, oldPrice: 169.99, rating: 4.8, reviews: 1240,
      img: 'https://picsum.photos/seed/aether-headphones/600/600',
      badge: 'Bestseller',
      desc: 'Studio-grade active noise cancellation meets 40-hour battery life. Aether headphones deliver crisp, room-filling sound wrapped in a featherlight memory-foam frame.'
    },
    {
      id: 'p02', name: 'Lumen Smartwatch Pro', category: 'Electronics',
      price: 249.99, oldPrice: 299.99, rating: 4.7, reviews: 890,
      img: 'https://picsum.photos/seed/lumen-smartwatch/600/600',
      badge: 'New',
      desc: 'Track your health, workouts and notifications with a razor-sharp AMOLED display and 10-day battery. Water resistant to 50m.'
    },
    {
      id: 'p03', name: 'Nova Bluetooth Speaker', category: 'Electronics',
      price: 79.99, oldPrice: 99.99, rating: 4.6, reviews: 2103,
      img: 'https://picsum.photos/seed/nova-speaker/600/600',
      badge: '',
      desc: '360° immersive sound in a compact, weatherproof shell. Pair two units for true stereo separation at any party or campsite.'
    },
    {
      id: 'p04', name: 'Pulse Mechanical Keyboard', category: 'Electronics',
      price: 109.99, oldPrice: 139.99, rating: 4.9, reviews: 654,
      img: 'https://picsum.photos/seed/pulse-keyboard/600/600',
      badge: 'Top Rated',
      desc: 'Hot-swappable switches, per-key RGB, and a CNC aluminum frame built for both competitive typing and late-night gaming sessions.'
    },
    {
      id: 'p05', name: 'Drift Canvas Sneakers', category: 'Fashion',
      price: 89.99, oldPrice: 119.99, rating: 4.5, reviews: 432,
      img: 'https://picsum.photos/seed/drift-sneakers/600/600',
      badge: '',
      desc: 'Minimalist silhouette, breathable canvas upper and a cushioned sole built for all-day comfort — from morning errands to evening walks.'
    },
    {
      id: 'p06', name: 'Velora Denim Jacket', category: 'Fashion',
      price: 109.99, oldPrice: 139.99, rating: 4.6, reviews: 318,
      img: 'https://picsum.photos/seed/velora-jacket/600/600',
      badge: 'New',
      desc: 'A timeless mid-wash denim jacket cut for a modern, relaxed fit. Layer it over anything for instant off-duty polish.'
    },
    {
      id: 'p07', name: 'Halcyon Polarized Sunglasses', category: 'Fashion',
      price: 59.99, oldPrice: 79.99, rating: 4.7, reviews: 887,
      img: 'https://picsum.photos/seed/halcyon-sunglasses/600/600',
      badge: '',
      desc: 'UV400 polarized lenses set in a lightweight acetate frame. Handcrafted detailing gives every pair a distinct, premium finish.'
    },
    {
      id: 'p08', name: 'Meridian Wool Scarf', category: 'Fashion',
      price: 44.99, oldPrice: 59.99, rating: 4.4, reviews: 201,
      img: 'https://picsum.photos/seed/meridian-scarf/600/600',
      badge: '',
      desc: 'Woven from soft merino wool blend, the Meridian scarf adds texture and warmth to any winter outfit without the bulk.'
    },
    {
      id: 'p09', name: 'Orbit Ceramic Vase Set', category: 'Home',
      price: 44.99, oldPrice: 59.99, rating: 4.5, reviews: 156,
      img: 'https://picsum.photos/seed/orbit-vase/600/600',
      badge: '',
      desc: 'A trio of hand-glazed ceramic vases in complementary tones — designed to bring quiet, sculptural elegance to any shelf or table.'
    },
    {
      id: 'p10', name: 'Ember Scented Candle Trio', category: 'Home',
      price: 34.99, oldPrice: 44.99, rating: 4.8, reviews: 623,
      img: 'https://picsum.photos/seed/ember-candle/600/600',
      badge: 'Bestseller',
      desc: 'Soy-wax candles in Amber Woods, Fresh Linen and Sea Salt — each burns cleanly for 45+ hours in a reusable glass jar.'
    },
    {
      id: 'p11', name: 'Cascade Cotton Bedsheet Set', category: 'Home',
      price: 69.99, oldPrice: 89.99, rating: 4.6, reviews: 340,
      img: 'https://picsum.photos/seed/cascade-bedsheets/600/600',
      badge: '',
      desc: '400-thread-count long-staple cotton sheets that stay cool and soft wash after wash. Includes fitted sheet, flat sheet and two pillowcases.'
    },
    {
      id: 'p12', name: 'Silk Glow Face Serum', category: 'Beauty',
      price: 39.99, oldPrice: 49.99, rating: 4.7, reviews: 980,
      img: 'https://picsum.photos/seed/silkglow-serum/600/600',
      badge: 'New',
      desc: 'A lightweight vitamin-C serum that brightens, hydrates and evens skin tone — dermatologist tested for all skin types.'
    },
    {
      id: 'p13', name: 'Terra Matte Lipstick Set', category: 'Beauty',
      price: 29.99, oldPrice: 39.99, rating: 4.5, reviews: 512,
      img: 'https://picsum.photos/seed/terra-lipstick/600/600',
      badge: '',
      desc: 'Four richly pigmented, transfer-resistant matte shades in one set — formulated with shea butter for a comfortable, non-drying wear.'
    },
    {
      id: 'p14', name: 'Pulse Pro Yoga Mat', category: 'Sports',
      price: 49.99, oldPrice: 64.99, rating: 4.8, reviews: 745,
      img: 'https://picsum.photos/seed/pulse-yogamat/600/600',
      badge: 'Top Rated',
      desc: 'Extra-thick, non-slip natural rubber mat with alignment guides — engineered for stability in every pose, from vinyasa to restorative.'
    },
    {
      id: 'p15', name: 'Stride Insulated Bottle', category: 'Sports',
      price: 19.99, oldPrice: 27.99, rating: 4.6, reviews: 1120,
      img: 'https://picsum.photos/seed/stride-bottle/600/600',
      badge: '',
      desc: 'Double-wall vacuum insulation keeps drinks cold for 24 hours or hot for 12. Leak-proof lid and a matte, grippy finish.'
    },
    {
      id: 'p16', name: 'Zephyr Commuter Backpack', category: 'Accessories',
      price: 74.99, oldPrice: 94.99, rating: 4.7, reviews: 402,
      img: 'https://picsum.photos/seed/zephyr-backpack/600/600',
      badge: 'New',
      desc: 'Water-resistant shell, padded 16" laptop sleeve and a hidden anti-theft pocket — built for daily commutes and weekend trips alike.'
    }
  ];

  /* ---------------------------------------------------------------------
     STATE
  --------------------------------------------------------------------- */
  const state = {
    category: 'all',
    query: '',
    sort: 'default',
    cart: loadStore('zentro_cart', []),
    wishlist: loadStore('zentro_wishlist', [])
  };

  function loadStore(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function saveStore(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
  }

  /* ---------------------------------------------------------------------
     DOM REFS
  --------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const productGrid = document.getElementById('productGrid');
  const resultCount = document.getElementById('resultCount');
  const noResults = document.getElementById('noResults');
  const categoryGrid = document.getElementById('categoryGrid');
  const searchInput = document.getElementById('searchInput');
  const searchSuggestions = document.getElementById('searchSuggestions');
  const sortSelect = document.getElementById('sortSelect');

  const cartBtn = document.getElementById('cartBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartClose = document.getElementById('cartClose');
  const cartBody = document.getElementById('cartBody');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartCount = document.getElementById('cartCount');
  const checkoutBtn = document.getElementById('checkoutBtn');

  const wishlistBtn = document.getElementById('wishlistBtn');
  const wishlistOverlay = document.getElementById('wishlistOverlay');
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const wishlistClose = document.getElementById('wishlistClose');
  const wishlistBody = document.getElementById('wishlistBody');
  const wishlistCount = document.getElementById('wishlistCount');

  const modalOverlay = document.getElementById('productModalOverlay');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  const newsletterForm = document.getElementById('newsletterForm');

  let modalQty = 1;
  let activeModalProduct = null;

  /* ---------------------------------------------------------------------
     HELPERS
  --------------------------------------------------------------------- */
  function money(n) { return '$' + n.toFixed(2); }
  function findProduct(id) { return PRODUCTS.find(p => p.id === id); }

  function starString(rating) {
    const full = Math.round(rating);
    let html = '';
    for (let i = 0; i < 5; i++) {
      html += `<i class="fa-solid fa-star" style="opacity:${i < full ? 1 : 0.28}"></i>`;
    }
    return html;
  }

  function showToast(message, icon, type) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast' + (type ? ' ' + type : '');
    toast.innerHTML = `<i class="fa-solid ${icon || 'fa-circle-check'}"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('leaving');
      setTimeout(() => toast.remove(), 350);
    }, 2600);
  }

  /* ---------------------------------------------------------------------
     PRODUCT FILTERING / SORTING / RENDERING
  --------------------------------------------------------------------- */
  function getFilteredProducts() {
    let list = PRODUCTS.filter(p => {
      const matchesCat = state.category === 'all' || p.category === state.category;
      const matchesQuery = !state.query || p.name.toLowerCase().includes(state.query.toLowerCase()) ||
        p.category.toLowerCase().includes(state.query.toLowerCase());
      return matchesCat && matchesQuery;
    });

    if (state.sort === 'low') list = list.slice().sort((a, b) => a.price - b.price);
    else if (state.sort === 'high') list = list.slice().sort((a, b) => b.price - a.price);
    else if (state.sort === 'rating') list = list.slice().sort((a, b) => b.rating - a.rating);

    return list;
  }

  function renderProducts() {
    const list = getFilteredProducts();
    resultCount.textContent = list.length;
    productGrid.innerHTML = '';

    if (list.length === 0) {
      noResults.hidden = false;
    } else {
      noResults.hidden = true;
    }

    list.forEach((p, idx) => {
      const isWished = state.wishlist.includes(p.id);
      const card = document.createElement('article');
      card.className = 'product-card';
      card.style.animationDelay = (idx * 0.04) + 's';
      card.innerHTML = `
        <div class="product-media" data-open-modal="${p.id}">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <button class="wishlist-toggle ${isWished ? 'active' : ''}" data-wishlist="${p.id}" aria-label="Toggle wishlist">
            <i class="fa-solid fa-heart"></i>
          </button>
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          <div class="quick-view">Quick View</div>
        </div>
        <div class="product-info">
          <span class="product-cat">${p.category}</span>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-rating">${starString(p.rating)} <span>(${p.reviews})</span></div>
          <div class="product-footer">
            <div class="product-price">
              <span class="price-now">${money(p.price)}</span>
              ${p.oldPrice ? `<span class="price-old">${money(p.oldPrice)}</span>` : ''}
            </div>
            <button class="add-cart-btn" data-add-cart="${p.id}" aria-label="Add to cart">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------------
     CATEGORY FILTER
  --------------------------------------------------------------------- */
  categoryGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-card');
    if (!btn) return;
    document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    state.category = btn.dataset.cat;
    renderProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* ---------------------------------------------------------------------
     SORTING
  --------------------------------------------------------------------- */
  sortSelect.addEventListener('change', () => {
    state.sort = sortSelect.value;
    renderProducts();
  });

  /* ---------------------------------------------------------------------
     LIVE SEARCH + SUGGESTIONS
  --------------------------------------------------------------------- */
  let searchDebounce = null;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      state.query = searchInput.value.trim();
      renderProducts();
      renderSuggestions(state.query);
    }, 150);
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) renderSuggestions(searchInput.value.trim());
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) {
      searchSuggestions.classList.remove('show');
    }
  });

  function renderSuggestions(query) {
    if (!query) {
      searchSuggestions.classList.remove('show');
      searchSuggestions.innerHTML = '';
      return;
    }
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6);

    if (matches.length === 0) {
      searchSuggestions.innerHTML = `<div class="suggestion-empty">No products found for "${escapeHtml(query)}"</div>`;
    } else {
      searchSuggestions.innerHTML = matches.map(p => `
        <div class="suggestion-item" data-open-modal="${p.id}">
          <img src="${p.img}" alt="${p.name}">
          <span class="s-name">${p.name}</span>
          <span class="s-price">${money(p.price)}</span>
        </div>
      `).join('');
    }
    searchSuggestions.classList.add('show');
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  searchSuggestions.addEventListener('click', (e) => {
    const item = e.target.closest('[data-open-modal]');
    if (!item) return;
    openModal(item.dataset.openModal);
    searchSuggestions.classList.remove('show');
  });

  /* ---------------------------------------------------------------------
     PRODUCT GRID DELEGATED EVENTS (open modal / wishlist / add to cart)
  --------------------------------------------------------------------- */
  productGrid.addEventListener('click', (e) => {
    const wishBtn = e.target.closest('[data-wishlist]');
    if (wishBtn) {
      toggleWishlist(wishBtn.dataset.wishlist);
      wishBtn.classList.toggle('active');
      return;
    }
    const cartBtnEl = e.target.closest('[data-add-cart]');
    if (cartBtnEl) {
      addToCart(cartBtnEl.dataset.addCart, 1);
      pulseAddButton(cartBtnEl);
      return;
    }
    const mediaEl = e.target.closest('[data-open-modal]');
    if (mediaEl) {
      openModal(mediaEl.dataset.openModal);
    }
  });

  function pulseAddButton(btn) {
    btn.classList.add('added');
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
    }, 900);
  }

  /* ---------------------------------------------------------------------
     WISHLIST LOGIC
  --------------------------------------------------------------------- */
  function toggleWishlist(id) {
    const idx = state.wishlist.indexOf(id);
    const product = findProduct(id);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      showToast(`${product.name} removed from wishlist`, 'fa-heart-crack', 'remove');
    } else {
      state.wishlist.push(id);
      showToast(`${product.name} added to wishlist`, 'fa-heart', 'success');
    }
    saveStore('zentro_wishlist', state.wishlist);
    updateCounts();
    renderWishlistDrawer();
  }

  function renderWishlistDrawer() {
    if (state.wishlist.length === 0) {
      wishlistBody.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-heart"></i>
          <strong>Your wishlist is empty</strong>
          <span>Tap the heart icon on any product to save it here.</span>
        </div>`;
      return;
    }
    wishlistBody.innerHTML = state.wishlist.map(id => {
      const p = findProduct(id);
      if (!p) return '';
      return `
        <div class="wishlist-item">
          <img src="${p.img}" alt="${p.name}">
          <div class="wishlist-item-info">
            <span class="wi-name">${p.name}</span>
            <span class="ci-cat">${p.category}</span>
            <strong>${money(p.price)}</strong>
            <div class="wishlist-item-actions">
              <button class="wl-move-cart" data-move-cart="${p.id}">Add to Cart</button>
              <button class="wl-remove" data-remove-wish="${p.id}">Remove</button>
            </div>
          </div>
        </div>`;
    }).join('');
  }

  wishlistBody.addEventListener('click', (e) => {
    const moveBtn = e.target.closest('[data-move-cart]');
    if (moveBtn) {
      addToCart(moveBtn.dataset.moveCart, 1);
      return;
    }
    const removeBtn = e.target.closest('[data-remove-wish]');
    if (removeBtn) {
      toggleWishlist(removeBtn.dataset.removeWish);
      syncWishlistButtons();
    }
  });

  function syncWishlistButtons() {
    document.querySelectorAll('[data-wishlist]').forEach(btn => {
      const id = btn.dataset.wishlist;
      btn.classList.toggle('active', state.wishlist.includes(id));
    });
  }

  /* ---------------------------------------------------------------------
     CART LOGIC
  --------------------------------------------------------------------- */
  function addToCart(id, qty) {
    const existing = state.cart.find(item => item.id === id);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({ id, qty });
    }
    saveStore('zentro_cart', state.cart);
    updateCounts();
    renderCartDrawer();
    const product = findProduct(id);
    showToast(`${product.name} added to cart`, 'fa-bag-shopping', 'success');
  }

  function updateCartQty(id, delta) {
    const item = state.cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      state.cart = state.cart.filter(i => i.id !== id);
    }
    saveStore('zentro_cart', state.cart);
    updateCounts();
    renderCartDrawer();
  }

  function removeFromCart(id) {
    state.cart = state.cart.filter(i => i.id !== id);
    saveStore('zentro_cart', state.cart);
    updateCounts();
    renderCartDrawer();
  }

  function cartSubtotalValue() {
    return state.cart.reduce((sum, item) => {
      const p = findProduct(item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  }

  function renderCartDrawer() {
    if (state.cart.length === 0) {
      cartBody.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-bag-shopping"></i>
          <strong>Your cart is empty</strong>
          <span>Add products to see them appear here.</span>
        </div>`;
      cartSubtotal.textContent = money(0);
      return;
    }
    cartBody.innerHTML = state.cart.map(item => {
      const p = findProduct(item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <img src="${p.img}" alt="${p.name}">
          <div class="cart-item-info">
            <span class="ci-name">${p.name}</span>
            <span class="ci-cat">${p.category}</span>
            <div class="cart-item-row">
              <div class="cart-qty">
                <button data-qty-minus="${p.id}"><i class="fa-solid fa-minus"></i></button>
                <span>${item.qty}</span>
                <button data-qty-plus="${p.id}"><i class="fa-solid fa-plus"></i></button>
              </div>
              <span class="cart-item-price">${money(p.price * item.qty)}</span>
            </div>
            <button class="remove-item" data-remove-cart="${p.id}"><i class="fa-solid fa-trash-can"></i> Remove</button>
          </div>
        </div>`;
    }).join('');
    cartSubtotal.textContent = money(cartSubtotalValue());
  }

  cartBody.addEventListener('click', (e) => {
    const plus = e.target.closest('[data-qty-plus]');
    if (plus) return updateCartQty(plus.dataset.qtyPlus, 1);
    const minus = e.target.closest('[data-qty-minus]');
    if (minus) return updateCartQty(minus.dataset.qtyMinus, -1);
    const remove = e.target.closest('[data-remove-cart]');
    if (remove) return removeFromCart(remove.dataset.removeCart);
  });

  checkoutBtn.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('Your cart is empty', 'fa-circle-exclamation');
      return;
    }
    showToast('Order placed! Thank you for shopping with Zentro.', 'fa-circle-check', 'success');
    state.cart = [];
    saveStore('zentro_cart', state.cart);
    updateCounts();
    renderCartDrawer();
    closeDrawer(cartDrawer, cartOverlay);
  });

  function updateCounts() {
    const totalItems = state.cart.reduce((sum, i) => sum + i.qty, 0);
    cartCount.textContent = totalItems;
    wishlistCount.textContent = state.wishlist.length;
  }

  /* ---------------------------------------------------------------------
     DRAWERS OPEN/CLOSE
  --------------------------------------------------------------------- */
  function openDrawer(drawer, overlay) {
    drawer.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer(drawer, overlay) {
    drawer.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  cartBtn.addEventListener('click', () => { renderCartDrawer(); openDrawer(cartDrawer, cartOverlay); });
  cartClose.addEventListener('click', () => closeDrawer(cartDrawer, cartOverlay));
  cartOverlay.addEventListener('click', () => closeDrawer(cartDrawer, cartOverlay));

  wishlistBtn.addEventListener('click', () => { renderWishlistDrawer(); openDrawer(wishlistDrawer, wishlistOverlay); });
  wishlistClose.addEventListener('click', () => closeDrawer(wishlistDrawer, wishlistOverlay));
  wishlistOverlay.addEventListener('click', () => closeDrawer(wishlistDrawer, wishlistOverlay));

  /* ---------------------------------------------------------------------
     PRODUCT DETAILS MODAL
  --------------------------------------------------------------------- */
  function openModal(id) {
    const p = findProduct(id);
    if (!p) return;
    activeModalProduct = p;
    modalQty = 1;
    renderModal();
    modalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function renderModal() {
    const p = activeModalProduct;
    const isWished = state.wishlist.includes(p.id);
    modalBody.innerHTML = `
      <div class="modal-media"><img src="${p.img}" alt="${p.name}"></div>
      <div class="modal-info">
        <span class="product-cat">${p.category}</span>
        <h2>${p.name}</h2>
        <div class="product-rating">${starString(p.rating)} <span>${p.rating} · ${p.reviews} reviews</span></div>
        <div class="modal-price">
          <span class="price-now">${money(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${money(p.oldPrice)}</span>` : ''}
        </div>
        <p class="modal-desc">${p.desc}</p>
        <div class="modal-meta">
          <span><i class="fa-solid fa-truck-fast"></i> Free shipping over $50</span>
          <span><i class="fa-solid fa-rotate-left"></i> 30-day returns</span>
          <span><i class="fa-solid fa-shield-halved"></i> 1-year warranty</span>
        </div>
        <div class="qty-row">
          <div class="qty-control">
            <button id="modalQtyMinus"><i class="fa-solid fa-minus"></i></button>
            <span id="modalQtyValue">${modalQty}</span>
            <button id="modalQtyPlus"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-primary" id="modalAddCart"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
          <button class="btn btn-ghost modal-wishlist-btn ${isWished ? 'active' : ''}" id="modalWishlistBtn">
            <i class="fa-solid fa-heart"></i> ${isWished ? 'Wishlisted' : 'Wishlist'}
          </button>
        </div>
      </div>
    `;

    document.getElementById('modalQtyMinus').addEventListener('click', () => {
      if (modalQty > 1) { modalQty--; document.getElementById('modalQtyValue').textContent = modalQty; }
    });
    document.getElementById('modalQtyPlus').addEventListener('click', () => {
      modalQty++; document.getElementById('modalQtyValue').textContent = modalQty;
    });
    document.getElementById('modalAddCart').addEventListener('click', () => {
      addToCart(p.id, modalQty);
    });
    document.getElementById('modalWishlistBtn').addEventListener('click', (e) => {
      toggleWishlist(p.id);
      syncWishlistButtons();
      const btn = e.currentTarget;
      const nowActive = state.wishlist.includes(p.id);
      btn.classList.toggle('active', nowActive);
      btn.innerHTML = `<i class="fa-solid fa-heart"></i> ${nowActive ? 'Wishlisted' : 'Wishlist'}`;
    });
  }

  function closeModal() {
    modalOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeDrawer(cartDrawer, cartOverlay);
      closeDrawer(wishlistDrawer, wishlistOverlay);
    }
  });

  /* ---------------------------------------------------------------------
     NEWSLETTER
  --------------------------------------------------------------------- */
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    showToast(`Subscribed! Check ${emailInput.value} for your 10% code.`, 'fa-envelope-circle-check', 'success');
    newsletterForm.reset();
  });

  /* ---------------------------------------------------------------------
     STICKY NAVBAR SHADOW ON SCROLL
  --------------------------------------------------------------------- */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });

  /* ---------------------------------------------------------------------
     MOBILE MENU TOGGLE
  --------------------------------------------------------------------- */
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-mobile');
    if (navLinks.classList.contains('show-mobile')) {
      navLinks.style.display = 'flex';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = 'rgba(10,10,15,0.98)';
      navLinks.style.padding = '20px 32px';
      navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.12)';
      navLinks.style.gap = '16px';
    } else {
      navLinks.style.display = '';
    }
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      e.target.classList.add('active');
      if (navLinks.classList.contains('show-mobile')) {
        navLinks.classList.remove('show-mobile');
        navLinks.style.display = '';
      }
    }
  });

  /* ---------------------------------------------------------------------
     INIT
  --------------------------------------------------------------------- */
  function init() {
    renderProducts();
    renderCartDrawer();
    renderWishlistDrawer();
    updateCounts();
  }

  init();
})();