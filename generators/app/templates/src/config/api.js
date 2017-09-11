import { create } from "apisauce";
import i18next from "i18next";

const api = create({
  baseURL: process.env.API_BASE_URL,
  timeout: 15000
});

i18next.addResources("es", "apiErrors", {
  expired: "La sesión expiró",
  noConnection:
    "El servicio no está disponible en este momento. Revise su conexión a internet"
});

export const apiSetup = dispatch => {
  // eslint-disable-line no-unused-vars, prettier/prettier
  api.addMonitor(response => {
    if (response.status === 401) {
      // TODO: These callbacks should only be called if no other callback was asigned for the response.
      // - dispatch(alertActions.error(i18next.t('apiErrors:expired')));
    }
  });

  api.addMonitor(response => {
    if (response.problem === "NETWORK_ERROR") {
      // - dispatch(alertActions.error(i18next.t('apiErrors:noConnection')));
    }
  });
};

export default api;
