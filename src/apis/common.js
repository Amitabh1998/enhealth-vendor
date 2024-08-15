import axios from "axios";

export const getData = async (limit, skip, path) => {
  try {
    const token = localStorage.getItem("enhealthVendorToken");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL_V1}/${path}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        $limit: limit,
        $skip: skip,
      },
    };

    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // throw error;
    console.log(error);
    return error?.response?.data?.message
      ? error?.response?.data?.message
      : "Something went wrong";
  }
};

export const getDataWithourLimit = async (path) => {
  try {
    const token = localStorage.getItem("enhealthVendorToken");
    console.log(path);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL_V1}/${path}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // throw error;
    console.log(error);
    throw error?.response?.data?.message
      ? error?.response?.data?.message
      : "Something went wrong";
  }
};

export const addCommonData = async (_data, path) => {
  try {
    const token = localStorage.getItem("enhealthVendorToken");

    let data = JSON.stringify(_data);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL_V1}/${path}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // throw error;
    console.log(error);
    throw error?.response?.data?.message
      ? error?.response?.data?.message
      : "Something went wrong";
  }
};

export const deleteData = async (path) => {
  try {
    const token = localStorage.getItem("vitmedsVendorToken");

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL_V1}/${path}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    // throw error;
    console.log(error);
    throw error?.response?.data?.message
      ? error?.response?.data?.message
      : "Something went wrong";
  }
};

export const updateCommonData = async (_data, path) => {
  try {
    const token = localStorage.getItem("enhealthVendorToken");

    let data = JSON.stringify(_data);

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL_V1}/${path}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // throw error;
    console.log(error);
    throw error?.response?.data?.message
      ? error?.response?.data?.message
      : "Something went wrong";
  }
};
