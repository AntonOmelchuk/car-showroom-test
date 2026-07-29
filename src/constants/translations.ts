export const TRANSLATIONS = {
  header: {
    title: 'Car Showroom',
    subtitle: 'Віртуальний автосалон',
    themeLight: 'Світла',
    themeDark: 'Темна',
  },
  home: {
    title: 'Каталог автомобілів',
    searchPlaceholder: 'Пошук авто за назвою...',
    notFound: 'Автомобілів за вашим запитом не знайдено',
    sortLabel: 'Сортування:',
    sortOptions: {
      default: 'За замовчуванням',
      priceAsc: 'Ціна: від найнижчої',
      priceDesc: 'Ціна: від найвищої',
      ratingDesc: 'За рейтингом',
    },
  },
  vehicle: {
    price: 'Ціна',
    rating: 'Оцінка',
    inStock: 'В наявності',
    outOfStock: 'Немає в наявності',
    detailsButton: 'Детальніше',
    reviewsTitle: 'Відгуки та огляди',
    noReviews: 'Поки немає жодного відгуку. Будьте першим!',
  },
  reviewForm: {
    title: 'Залишити відгук',
    nameLabel: "Ваше ім'я",
    commentLabel: 'Ваш коментар',
    ratingLabel: 'Оцінка',
    submitButton: 'Надіслати відгук',
    successMessage: 'Дякуємо! Ваш відгук успішно додано.',
  },
  ui: {
    loading: 'Завантаження даних...',
    errorTitle: 'Виникла помилка',
    retryButton: 'Спробувати знову',
  },
  errors: {
    generic: 'Щось пішло не так. Спробуйте пізніше.',
    fetchFailed: 'Не вдалося завантажити дані автомобілів.',
  },
} as const;
