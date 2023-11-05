import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:5001/sidekick-8df83/us-central1/api'
    : 'https://us-central1-sidekick-8df83.cloudfunctions.net/api';

class API {
  constructor(private version: string) {}

  private getFullUrl(url: string): string {
    return `${BASE_URL}/${this.version}${url}`;
  }

  get = async <ExpectedResponseType>(
    url: string,
    config?: AxiosRequestConfig
  ) => {
    return (await axios.get(
      this.getFullUrl(url),
      config
    )) as AxiosResponse<ExpectedResponseType>;
  };

  put = async <ExpectedResponseType>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => {
    return (await axios.put(
      this.getFullUrl(url),
      data,
      config
    )) as AxiosResponse<ExpectedResponseType>;
  };

  post = async <ExpectedResponseType>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => {
    return (await axios.post(
      this.getFullUrl(url),
      data,
      config
    )) as AxiosResponse<ExpectedResponseType>;
  };

  delete = async <ExpectedResponseType>(
    url: string,
    config?: AxiosRequestConfig
  ) => {
    return (await axios.delete(
      this.getFullUrl(url),
      config
    )) as AxiosResponse<ExpectedResponseType>;
  };
}

export default new API('v1');
