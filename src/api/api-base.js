import Axios from "axios";

/*
 *
 * React Components에서 Backend 호출 시 아래 해당 하는 메서드를 호출한다.
 * Backend API 호출하므로 Java의 Controller URL과 매핑이 되야한다.
 *
 */
const api = Axios.create({
  baseURL: `http://moit-server-prod.eba-eecfjwgm.ap-northeast-2.elasticbeanstalk.com/`,
});

export default api;