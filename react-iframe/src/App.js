import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.css";

// 随机生成2-15位字符串
function randomPassword() {
  const password = "abcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < Math.floor(Math.random() * 7 + 4); i++) {
    str += password[Math.floor(Math.random() * password.length)];
  }
  return str;
}

const avatar = faker.image.avatar();
function App() {
  const [form, setForm] = useState({
    name: faker.name.fullName(),
    password: randomPassword(),
    email: faker.internet.email(),
  });
  const [flag, setFlag] = useState("");
  useEffect(() => {
    // 接收上层top向本iframe传的参数
    window.addEventListener("message", (e) => {
      const { type, ...data } = e.data;
      if (type === "vue-iframe") {
        console.log("data", data);
        setFlag(data.label);
      }
    });
    // 生成随机用户名
  }, [flag]);

  const [passwordType, setPasswordType] = useState("password");
  const changeForm = (type, e) => {
    switch (type) {
      case "name":
        setForm({
          ...form,
          name: e.target.value,
        });

        break;
      case "password":
        setForm({
          ...form,
          password: e.target.value,
        });
        break;

      default:
        break;
    }
  };
  const viewPed = (e) => {
    e.preventDefault();
    // 切换密码显隐状态
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <div className="App">
      {/* 登录表单 */}

      <h1 className="title">{flag}</h1>
      <form>
        <div className="avatar">
          <img alt="avatar" src={avatar} />
        </div>
        <label>
          <span>USERNAME</span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => changeForm("name", e)}
            name="name"
          />
        </label>
        <br />
        <label>
          <span>PASSWORD</span>
          {/* 支持查看密码功能 */}
          <input
            type={passwordType}
            value={form.password}
            onChange={(e) => changeForm("password", e)}
            name="password"
          />
          {/* 切换密码显隐状态的按钮 */}
          <button
            onClick={viewPed}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            title={
              passwordType === "password" ? "show password" : "hide password"
            }
          >
            {passwordType === "password" ? "🕶" : "👀"}
          </button>
        </label>

        <br />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
}

export default App;
