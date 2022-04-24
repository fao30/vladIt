import {
  ITEMS_LOADING,
  CITIES,
} from "../actionType/itemActionType";


function setCities(payload) {
  return {
    type: CITIES,
    payload,
  };
}

function itemsLoading(payload) {
  return {
    type: ITEMS_LOADING,
    payload,
  };
}

export function fetchCities() {
  return function (dispatch, getState) {
    dispatch(itemsLoading());
    fetch(`https://kladr-api.ru/api.php?query=а&contentType=city&token=5bkK4F9NND762d2yKGADaZikZ9KNsSsZ`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((response1) => {
        dispatch(setCities(response1.result));
      })

      .catch((error) => {
        console.log(error);
      });
  };
}
