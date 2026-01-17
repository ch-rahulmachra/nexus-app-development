import axios from "axios";

export const authApi = axios.create({ baseURL: "/api/auth" });
export const userApi = axios.create({ baseURL: "/api/users" });
export const projectApi = axios.create({ baseURL: "/api/projects" });
export const taskApi = axios.create({ baseURL: "/api/tasks" });
export const expenseApi = axios.create({ baseURL: "/api/expenses" });
export const approvalApi = axios.create({ baseURL: "/api/approvals" });
export const notificationApi = axios.create({ baseURL: "/api/notifications" });
export const auditApi = axios.create({ baseURL: "/api/audit" });
export const reportingApi = axios.create({ baseURL: "/api/reports" });


const attachToken = config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
};

authApi.interceptors.request.use(attachToken);
userApi.interceptors.request.use(attachToken);
projectApi.interceptors.request.use(attachToken);
taskApi.interceptors.request.use(attachToken);
expenseApi.interceptors.request.use(attachToken);
approvalApi.interceptors.request.use(attachToken);
notificationApi.interceptors.request.use(attachToken);
auditApi.interceptors.request.use(attachToken);
reportingApi.interceptors.request.use(attachToken);