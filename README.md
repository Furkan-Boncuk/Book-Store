# Book Store Uygulaması

Bu proje, Google Books API kullanarak geliştirilen bir React tabanlı kitap mağazası uygulamasıdır. 
Uygulama; ana sayfa (homepage), kitap detayları (bookDetail), alışveriş sepeti (shoppingCart) ve ödeme sayfalarına (payment) sahiptir. 
Her sayfada ortak bir navbar ve footer bulunmaktadır.

## Ön Gereksinimler

- Node.js ve npm yüklü olmalıdır.

## Kurulum

1. Projeyi klonlayın:

    ```bash
    git clone https://github.com/Furkan-Boncuk/book-store.git
    ```

2. Proje dizinine gidin:

    ```bash
    cd book-store
    ```

3. Bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

## Çalıştırma

Proje başarıyla yüklendikten sonra, aşağıdaki komutla uygulamayı başlatabilirsiniz:

```bash
npm run start
```
Gerekli adımları uyguladıktan sonra http://localhost:3000 adresine giderek projeyi görebilirsiniz.

## Projenin Detayları :

## Sayfalar

| Sayfa                            | Açıklama                                                                                           |
|----------------------------------|----------------------------------------------------------------------------------------------------|
| Ana Sayfa ("/")                  | Popüler kitapları görebilir, kitapları yazar veya başlıklarına göre arayabilirsiniz.               |
| Kitap Detayları ("/detail/:id")  | Belirli bir kitabın detaylarını görüntüleyebilirsiniz.                                             |
| Alışveriş Sepeti ("/cart")       | Sepetinizdeki ürünleri görüntüler ve ürünlerin adedini değiştirebilir veya ödemeye geçebilirsiniz. |
| Ödeme Sayfası ("/payment")       | Ödeme işlemleri için gerekli bilgileri girerek validasyon sonrasında ödeme yapabilirsiniz.         |

## Kullanılan Teknolojiler ve Kütüphaneler

- React
- React Router Dom
- Context API
- Google Books API
- Font Awesome Icons

## Özellikler

- Arama çubuğu ile kitapları başlığa veya yazar adına göre arama yapma.
- Verilerin yüklenmesi sırasında animasyonlu yükleme ekranları.
- Responsive tasarım ile farklı cihazlara uyumluluk.



