
/*
 * ACHI FASHION
 * CENTRAL PRODUCT DATABASE
 *
 * Quy ước dữ liệu:
 * - id: Định danh duy nhất, không thay đổi tùy tiện.
 * - slug: Đường dẫn trang chi tiết, không được trùng.
 * - code: Mã sản phẩm nội bộ ACHI.
 * - listPrice: Giá niêm yết (VND), chưa có thì null.
 * - messengerPrice: Giá Messenger (VND), chưa có thì null.
 * - String chưa có thông tin: ''.
 * - Danh sách chưa có dữ liệu: [].
 * - Ảnh chưa có: '' hoặc [].
 *
 * Category:
 * jean-jacket | kaki | gile | jeans | shorts | tshirt
 *
 * Status:
 * draft | active | hidden | discontinued
 */

export const products = [
  // ==================================================
  // 01. ÁO KHOÁC JEAN UNISEX XANH LOANG
  // ==================================================
  {
    id: 'ao-khoac-jean-unisex-xanh-loang',
    slug: 'ao-khoac-jean-unisex-xanh-loang',

    name: 'Áo khoác Jean Unisex xanh loang',
    code: '',

    category: 'jean-jacket',
    gender: 'Unisex',
    color: 'Xanh',
    fit: 'Form rộng',

    label: 'SIGNATURE · UNISEX',

    listPrice: null,
    messengerPrice: null,

    material: '',
    description: '',

    sizes: [],
    sizeChart: [],

    images: {
      front: '/assets/xanh-loang-bom-nh-main.webp',
      back: '/assets/xanh-loang-bom-nh-back.webp',
      model: [
        '/assets/xanh-loang-bom-nh-model-front.webp',
        '/assets/xanh-loang-bom-nh-model-back.webp'
      ]
    },

    links: {
      messenger: 'https://m.me/aChi.Jeans',
      shopee: ''
    },

    status: 'draft'
  },

  // ==================================================
  // 02. ÁO KHOÁC JEAN NAM XANH NHẠT
  // ==================================================
  {
    id: 'ao-khoac-jean-nam-xanh-nhat',
    slug: 'ao-khoac-jean-nam-xanh-nhat',

    name: 'Áo khoác Jean nam xanh nhạt',
    code: '',

    category: 'jean-jacket',
    gender: 'Nam',
    color: 'Xanh',
    fit: '',

    label: "MEN'S DENIM",

    listPrice: null,
    messengerPrice: null,

    material: '',
    description: '',

    sizes: [],
    sizeChart: [],

    images: {
      front: '/assets/blue-basic.webp',
      back: '',
      model: []
    },

    links: {
      messenger: 'https://m.me/aChi.Jeans',
      shopee: ''
    },

    status: 'draft'
  },

  // ==================================================
  // 03. ÁO KHOÁC KAKI TRẮNG UNISEX
  // ==================================================
  {
    id: 'ao-khoac-kaki-trang-unisex',
    slug: 'ao-khoac-kaki-trang-unisex',

    name: 'Áo khoác Kaki trắng Unisex',
    code: '',

    category: 'kaki',
    gender: 'Unisex',
    color: 'Trắng',
    fit: '',

    label: 'KAKI COLLECTION',

    listPrice: null,
    messengerPrice: null,

    material: '',
    description: '',

    sizes: [],
    sizeChart: [],

    images: {
      front: '/assets/kaki-trang-unisex.webp',
      back: '',
      model: []
    },

    links: {
      messenger: 'https://m.me/aChi.Jeans',
      shopee: ''
    },

    status: 'draft'
  },

  // ==================================================
  // 04. GILE XANH JEANS UNISEX
  // ==================================================
  {
    id: 'gile-xanh-jeans-unisex',
    slug: 'gile-xanh-jeans-unisex',

    name: 'Gile xanh Jeans Unisex',
    code: '',

    category: 'gile',
    gender: 'Unisex',
    color: 'Xanh',
    fit: '',

    label: 'GILE COLLECTION',

    listPrice: null,
    messengerPrice: null,

    material: '',
    description: '',

    sizes: [],
    sizeChart: [],

    images: {
      front: '/assets/gile-xanh-jeans.webp',
      back: '',
      model: []
    },

    links: {
      messenger: 'https://m.me/aChi.Jeans',
      shopee: ''
    },

    status: 'draft'
  },

  // ==================================================
  // 05. QUẦN JEAN NAM ACHI FASHION
  // ==================================================
  {
    id: 'quan-jean-nam-achi-fashion',
    slug: 'quan-jean-nam-achi-fashion',

    name: 'Quần Jean nam ACHI FASHION',
    code: '',

    category: 'jeans',
    gender: 'Nam',
    color: 'Xanh',
    fit: '',

    label: "MEN'S ESSENTIALS",

    listPrice: null,
    messengerPrice: null,

    material: '',
    description: '',

    sizes: [],
    sizeChart: [],

    images: {
      front: '/assets/mens-jeans.webp',
      back: '',
      model: []
    },

    links: {
      messenger: 'https://m.me/aChi.Jeans',
      shopee: ''
    },

    status: 'draft'
  },

  // ==================================================
  // 06. QUẦN SHORT NAM ACHI FASHION
  // ==================================================
  {
    id: 'quan-short-nam-achi-fashion',
    slug: 'quan-short-nam-achi-fashion',

    name: 'Quần Short nam ACHI FASHION',
    code: '',

    category: 'shorts',
    gender: 'Nam',
    color: '',
    fit: '',

    label: 'DAILY ESSENTIALS',

    listPrice: null,
    messengerPrice: null,

    material: '',
    description: '',

    sizes: [],
    sizeChart: [],

    images: {
      front: '/assets/mens-shorts.webp',
      back: '',
      model: []
    },

    links: {
      messenger: 'https://m.me/aChi.Jeans',
      shopee: ''
    },

    status: 'draft'
  }
];
