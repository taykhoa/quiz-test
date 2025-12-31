<script setup lang="ts">
import LessonBlock from "~/components/lesson/LessonBlock.vue"
</script>

<template>
  <section class="space-y-10">

    <!-- ===== I. DẪN NHẬP ===== -->
    <LessonBlock title="Dẫn nhập" icon="🔍" variant="intro">
      <p>
        Sau khi ăn một bữa thật no, bạn thường không còn muốn ăn thêm nữa,
        vì không còn chỗ trống để tiếp nhận thêm thức ăn.
      </p>

      <p>
        Tương tự, trong hóa học, các <strong>khí hiếm</strong> có lớp electron
        ngoài cùng đã được <strong>lấp đầy hoàn toàn</strong>, nên không còn
        khả năng nhận thêm electron và hầu như không tham gia phản ứng hóa học.
      </p>
    </LessonBlock>

    <!-- ===== II. BỐI CẢNH ===== -->
    <LessonBlock
      title="Bối cảnh hình thành khái niệm"
      icon="🧠"
      variant="info"
    >
      <p>
        Trong các bài trước, cấu hình electron của nguyên tử thường được viết
        <strong>đầy đủ</strong> theo thứ tự mức năng lượng, ví dụ:
      </p>

      <p class="font-mono">
        1s² 2s² 2p⁶ 3s¹
      </p>

      <p>
        Tuy nhiên, với các nguyên tử có nhiều electron, cách viết này:
      </p>

      <ul>
        <li>Dài</li>
        <li>Khó quan sát lớp electron ngoài cùng</li>
        <li>Không làm nổi bật tính ổn định của nguyên tử</li>
      </ul>

      <p>
        Vì vậy, người ta sử dụng <strong>cấu hình electron khí hiếm</strong>
        để rút gọn cách viết và làm rõ bản chất hóa học.
      </p>
    </LessonBlock>

    <!-- ===== III. MỤC TIÊU ===== -->
    <LessonBlock title="Mục tiêu bài học" icon="🎯" variant="goal">
      <ul>
        <li>Trình bày được khái niệm cấu hình electron khí hiếm</li>
        <li>Viết được cấu hình electron khí hiếm của một nguyên tố</li>
        <li>So sánh cấu hình đầy đủ và cấu hình khí hiếm</li>
        <li>Nhận ra vai trò của electron hóa trị</li>
      </ul>
    </LessonBlock>

    <!-- ===== IV. NỘI DUNG ===== -->
    <section class="lesson-section">
      <h2>1. Khí hiếm và sự ổn định</h2>

      <p>
        <strong>Khí hiếm</strong> là các nguyên tố nằm ở
        <strong>cột cuối cùng</strong> của bảng tuần hoàn.
      </p>

      <p>
        Lớp electron ngoài cùng của chúng đã được <strong>lấp đầy</strong>,
        ví dụ:
      </p>

      <ul>
        <li>Helium: 1s²</li>
        <li>Neon: 1s² 2s² 2p⁶</li>
        <li>Argon: 1s² 2s² 2p⁶ 3s² 3p⁶</li>
      </ul>

      <p>
        Chính cấu trúc electron “đầy” này khiến khí hiếm
        <strong>rất bền</strong> và <strong>ít phản ứng</strong>.
      </p>
    </section>

    <section class="lesson-section">
      <h2>2. Khái niệm cấu hình electron khí hiếm</h2>

      <p>
        <strong>Cấu hình electron khí hiếm</strong> là cách viết cấu hình electron
        của một nguyên tử bằng cách:
      </p>

      <p>
        Dùng <strong>ký hiệu của khí hiếm đứng trước</strong> nguyên tố đó
        để thay cho phần cấu hình electron bên trong.
      </p>

      <p>
        Phần còn lại chỉ biểu diễn <strong>các electron lớp ngoài cùng</strong>.
      </p>
    </section>

    <section class="lesson-section">
      <h2>3. Ví dụ minh họa</h2>

      <p><strong>Sodium (Na)</strong> – số hiệu nguyên tử 11</p>

      <ul>
        <li>Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s¹</li>
        <li>Khí hiếm đứng trước: Neon (Ne)</li>
        <li>Cấu hình khí hiếm: <strong>[Ne] 3s¹</strong></li>
      </ul>

      <p><strong>Magnesium (Mg)</strong></p>
      <p class="font-mono">[Ne] 3s²</p>

      <p><strong>Chlorine (Cl)</strong></p>
      <p class="font-mono">[Ne] 3s² 3p⁵</p>
    </section>

    <section class="lesson-section">
      <h2>4. Ý nghĩa của cấu hình khí hiếm</h2>

      <ul>
        <li>Viết cấu hình electron ngắn gọn hơn</li>
        <li>Dễ xác định số electron hóa trị</li>
        <li>Dự đoán tính chất hóa học của nguyên tố</li>
      </ul>
    </section>

    <section class="lesson-section">
      <h2>5. Xu hướng electron hóa trị trong một chu kì</h2>

      <p>
        Trong cùng một chu kì, số electron hóa trị
        <strong>tăng dần từ 1 đến 8</strong>,
        kết thúc bằng một <strong>khí hiếm</strong>.
      </p>

      <ul>
        <li>Na: [Ne] 3s¹</li>
        <li>Mg: [Ne] 3s²</li>
        <li>Al: [Ne] 3s² 3p¹</li>
        <li>Si: [Ne] 3s² 3p²</li>
        <li>P: [Ne] 3s² 3p³</li>
        <li>S: [Ne] 3s² 3p⁴</li>
        <li>Cl: [Ne] 3s² 3p⁵</li>
        <li>Ar: [Ne] 3s² 3p⁶</li>
      </ul>
    </section>

    <!-- ===== V. TỔNG KẾT ===== -->
    <LessonBlock title="Tổng kết" icon="📌" variant="summary">
      <ul>
        <li>Khí hiếm có lớp electron ngoài cùng đã được lấp đầy</li>
        <li>Cấu hình khí hiếm giúp rút gọn cách viết cấu hình electron</li>
        <li>Phần sau ký hiệu khí hiếm là electron hóa trị</li>
        <li>Cách viết này làm nổi bật bản chất hóa học của nguyên tử</li>
      </ul>
    </LessonBlock>

    <!-- ===== VI. CÂU HỎI ===== -->
    <LessonBlock title="Câu hỏi ôn tập" icon="❓" variant="review">
      <ol>
        <li>Vì sao khí hiếm hầu như không tham gia phản ứng hóa học?</li>
        <li>Thế nào là cấu hình electron khí hiếm?</li>
        <li>Viết cấu hình khí hiếm của Magnesium và Sulfur</li>
        <li>
          Vì sao cấu hình khí hiếm giúp dự đoán tính chất hóa học của nguyên tố?
        </li>
      </ol>
    </LessonBlock>

  </section>
</template>
