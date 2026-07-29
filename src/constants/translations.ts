export const TRANSLATIONS = {
  header: {
    title: 'Car Showroom',
    subtitle: 'Віртуальний автосалон',
  },
  home: {
    searchPlaceholder: 'Пошук авто за назвою...',
    filterCategory: 'Категорія',
    notFound: 'Автомобілів за вашим запитом не знайдено',
  },
  vehicle: {
    price: 'Ціна',
    rating: 'Оцінка',
    inStock: 'В наявності',
    outOfStock: 'Немає в наявності',
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
  errors: {
    generic: 'Щось пішло не так. Спробуйте пізніше.',
    fetchFailed: 'Не вдалося завантажити дані автомобілів.',
  },
} as const;
