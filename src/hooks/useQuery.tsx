import axios, { AxiosResponse, AxiosRequestConfig, Method } from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

type TState = {
  data: {} | [] | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;
};

type Props = {
  url: string;
  method?: Method;
  config?: AxiosRequestConfig;
  fn: () => void;
};

const useQuery: React.FC<Props> = ({ url, method = 'get', config }) => {
  const [state, setState] = useState<TState>({
    data: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: '',
  });

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    axios({
      method,
      url,
      ...config,
    })
      .then((response: AxiosResponse) => {
        setState({
          data: response.data,
          isLoading: false,
          isSuccess: true,
          isError: false,
          error: '',
        });
      })
      .catch((error) => {
        setState({
          data: null,
          isLoading: false,
          isSuccess: false,
          isError: true,
          error: error.message || 'An error occurred',
        });
        toast.error(error.message);
      });
  }, [url, method, config]);

  return state;
};

export default useQuery;
