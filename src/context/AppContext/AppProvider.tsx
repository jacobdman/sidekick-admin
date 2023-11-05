import {
  Lead,
  CompanyWithSubscriptionsAndServices,
  SubscriptionTier,
} from 'types';
import React, { useState, useEffect, useContext } from 'react';
import AppContext from './AppContext';
import API from 'services/API';
import axios from 'axios';
// import { SUBSCRIPTION_TIERS } from 'constants/subscriptionTiers.constants';
import find from 'lodash/find';
import useLogEvent from 'hooks/useLogEvent';
// import { SIDEKICK_LOGGING_EVENTS } from 'constants/events.constants';

const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  // ******************STATE VALUES**********************
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [apiKey, setApiKey] = useState<string | null>('');
  const [leadDetails, setLeadDetails] = useState<Partial<Lead>>({});
  const [company, setCompany] = useState<
    Partial<CompanyWithSubscriptionsAndServices>
  >({});
  // const [subscriptionTier, setSubscriptionTier] = useState<SubscriptionTier>(
  //   SUBSCRIPTION_TIERS.FREE
  // ); // default to free tier

  // const logSessionStarted = useLogEvent(
  //   SIDEKICK_LOGGING_EVENTS.SESSION_STARTED
  // );
  // const logSessionEnded = useLogEvent(SIDEKICK_LOGGING_EVENTS.SESSION_ENDED);

  // ******************EFFECTS/REACTIONS**********************

  // On Component Mount
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setApiKey(process.env.DEVELOPMENT_API_KEY ?? '');
    } else {
      const scriptElement = document.getElementById(
        '__sidekick_embed_script__'
      ) as HTMLScriptElement;
      const scriptUrl = scriptElement?.getAttribute('src') ?? '';

      const apiKeyParam = new URL(scriptUrl)?.searchParams?.get('apiKey');
      setApiKey(apiKeyParam);
    }
    return () => {
      // logSessionEnded();
    };
  }, []);

  // On API Key Change
  useEffect(() => {
    const loadData = async () => {
      const { data: company } = await API.get<
        Partial<CompanyWithSubscriptionsAndServices>
      >(`/company/apiKey`);
      setCompany(company);
      // setSubscriptionTier(
      //   find(SUBSCRIPTION_TIERS, { id: company?.subscription?.tier?.id }) ??
      //     SUBSCRIPTION_TIERS.FREE // default to free tier
      // );
    };

    const setAxiosInterceptors = () => {
      axios.interceptors.request.use(config => {
        return config;
      });
      axios.defaults.headers.common['x-api-key'] = apiKey ?? '';
    }

    if (apiKey) {
      setAxiosInterceptors();
      loadData();
    }
  }, [apiKey]);

  // On Company Change
  useEffect(() => {
    // logSessionStarted();
  }, [company])

  // ******************COMPUTED VALUES**********************

  // ******************UTILITY FUNCTIONS**********************

  const handleLogIn = (user: any) => {
    setLoggedInUser(user);
  };

  // ******************LOAD FUNCTIONS**********************

  // ******************EXPORTS**********************
  return (
    <AppContext.Provider
      value={{
        // state
        loggedInUser,
        handleLogIn,
        apiKey,
        company,
        // subscriptionTier,
        leadDetails,
        setLeadDetails,
        // computed
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
