<template>
  <div>
    <header class="header">
      <div class="logo-container">
        <a href="/">
          <img src="@/assets/logo.jpg" alt="로고" class="logo" />
        </a>
      </div>
      <div class="menu-icon" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div :class="['menu-list', { active: menuActive }]">
        <ul>
          <li><a href="#">소개</a></li>
          <li><a href="#">프로그램</a></li>
          <li><a href="#">콘텐츠</a></li>
          <li><a href="#">고객센터</a></li>
        </ul>
      </div>
    </header>

    <main class="main-center">
      <div class="form-container">
        <h2>문의하기</h2>
        <p class="form-subtitle">
          FAQ에 찾는 질문이 없으신가요?<br />
          문의 내용을 편하게 남겨주시면, 운영 시간에 답변드릴게요!
        </p>
        <div class="notice-box">
          <strong class="red">고객센터 운영 시간</strong><br />
          평일 10:00~18:00 (주말, 공휴일 제외)
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="form-group" v-for="(field, index) in fields" :key="index">
            <label :for="field.id">{{ field.label }}</label>
            <input
              v-if="field.type !== 'textarea' && field.type !== 'select'"
              :type="field.type"
              :id="field.id"
              :placeholder="field.placeholder"
              v-model="form[field.id]"
            />
            <select
              v-else-if="field.type === 'select'"
              :id="field.id"
              v-model="form[field.id]"
            >
              <option value="프로젝트">프로젝트</option>
              <option value="콘텐트">콘텐트</option>
              <option value="서포터즈">서포터즈</option>
              <option value="준비중">준비중....</option>
            </select>
            <textarea
              v-else
              :id="field.id"
              :placeholder="field.placeholder"
              v-model="form[field.id]"
            ></textarea>
          </div>

          <div class="form-group file-upload">
            <label for="file">📎 파일 첨부</label>
            <input type="file" id="file" @change="handleFileUpload" />
          </div>

          <div class="form-note">
            <ul>
              <li>답변은 입력하신 이메일로 발송됩니다.</li>
              <li>
                메일 수신이 안될 경우
                <span class="email">root.office120@gmail.com</span>
                차단 여부를 확인해주세요.
              </li>
            </ul>
          </div>

          <button type="submit" class="submit-btn full">제출하기</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "SupportersForm",
  data() {
    return {
      menuActive: false,
      form: {
        name: "",
        email: "",
        phone: "",
        type: "프로젝트",
        subject: "",
        message: "",
        file: null,
      },
      fields: [
        {
          id: "name",
          label: "이름",
          placeholder: "이름을 입력해주세요",
          type: "text",
        },
        {
          id: "email",
          label: "이메일",
          placeholder: "이메일을 입력해주세요",
          type: "email",
        },
        {
          id: "phone",
          label: "휴대폰 번호",
          placeholder: "(-)없이 숫자만 입력해주세요",
          type: "tel",
        },
        { id: "type", label: "문의 유형", placeholder: "", type: "select" },
        {
          id: "subject",
          label: "문의 제목",
          placeholder: "문의 제목을 입력해주세요",
          type: "text",
        },
        {
          id: "message",
          label: "문의 내용",
          placeholder: "문의 내용을 입력해주세요",
          type: "textarea",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    handleFileUpload(event) {
      this.form.file = event.target.files[0];
    },
    handleSubmit() {
      // 처리 로직 필요시 여기에 구현
      console.log("제출된 데이터:", this.form);
      alert("제출이 완료되었습니다!");
    },
  },
};
</script>

<style scoped>
/* supporters.css 전체 복사 */
@import "@/assets/supporters.css";
.form-container h2 {
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: bold;
  color: #111;
  text-align: center;
}
.form-subtitle {
  font-size: 14px;
  text-align: center;
  color: #555;
  margin-bottom: 24px;
  line-height: 1.6;
}
</style>
