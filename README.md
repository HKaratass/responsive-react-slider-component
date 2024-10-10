<!-- responsive-react-slider-component -->
<!-- Responsive Styled-Component Slider (ReactJS + TypeScript) -->

# React Slider

Bu **react-component**'te kullanılan fotoğraflar [Picsum](https://picsum.photos/) sitesinden alınmıştır. Fotoğrafları `src/data.json` dosyası aracılığıyla ekleyebilir, çıkarabilir ve değiştirebilirsiniz. Fetch edilen veriler, `Images` dizisine atanarak kullanılabilir.

## Özellikler

- **Basit Tasarım:** Daha önce projelerimde demo olarak kullandığım basit bir tasarım.
- **Zamanla Geçiş:** Slaytlar arasında belirlenen zamanla geçiş yapma. (Fotoğraf üzerine gelindiğinde zamanla geçiş iptal edilir.)
- **İleri/Geri Hareket:** Kullanıcı slaytlar arasında ileri ve geri hareket edebilir.
- **Responsive:** Eklenen fotoğrafların boyutu ne olursa olsun slayta uygun hale gelir. 
    - Sayfa boyutuna göre slider yeniden boyutlanır. Component, bir site üzerinde kullanıldığında yeniden ölçeklendirilmelidir.
- **Sürükleme Desteği:** Hem touch kontrol hem de mouse ile sürükleyerek geçme özelliği eklendi.
- **Yönlendirme:** Slaytlara atanmış URL'ler varsa, slayt tıklandığında kullanıcı belirtilen URL'ye yönlendirilir.


## Demo
React-Component'in canlı demo versiyonuna [buradan](https://HKaratass.github.io/responsive-react-slider-component/) ulaşabilirsiniz.

<br>
<hr>
<br>

#### Ek Bilgilendirme

- Yönlendirme işlemleri için `react-router-dom` kütüphanesi kullanılmıştır. Eğer bu kütüphane projede kullanılmıyorsa, `navigate()` yerine `window.location` veya tercih edilen başka bir **router kütüphanesi** kullanılabilir.

- GitHub Pages için *`gh-pages`* kullanılmıştır. 