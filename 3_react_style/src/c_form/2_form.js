import { useState } from "react";

const MyForm= () => {
  const [nameValue, setNameValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
 const [resultMessage, setResultMessage] = useState('');

  const handleName = (e) => {
    setNameValue(e.target.value);
  };

  const handleMessage = (e) => {
    setMessageValue(e.target.value);
  };

  const handleCountry = (e) => {
    setCountryValue(e.target.value);
  };

  const handleGender = (e) => {
    setGenderValue(e.target.value);
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const msg = `
-----------------------
이름     : ${nameValue}
메세지   : ${messageValue}
여행지   : ${countryValue}
성별     : ${genderValue}
-----------------------`;

  setResultMessage(msg);
};

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>이름</label><br />
      <input type="text" value={nameValue} onChange={handleName} /><br />

      <label>메세지</label><br />
      <textarea value={messageValue} onChange={handleMessage}></textarea><br />

      <label>여행갈 나라는</label><br />
      <select value={countryValue} onChange={handleCountry}>
        <option>외국</option>
        <option>멀리</option>
        <option>부탄</option>
        <option>한국</option>
      </select><br />

      <label>성별</label><br />
      <input type="radio" name="gender" value="남자" onChange={handleGender} /> 남자
      <input type="radio" name="gender" value="여자" onChange={handleGender} /> 여자
      <hr />
      <button type="submit">전송</button>
    </form>
   <p><pre>{resultMessage}</pre></p>
    </div>
  );
}

export default MyForm;
