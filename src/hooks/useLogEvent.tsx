import { SidekickEventLog } from 'types';
import API from 'services/API';
import useAppContext from 'context/AppContext';

const useLogEvent = (
  event: SidekickEventLog['event']
) => {
  const { company } = useAppContext();
  const isDevelopment = process.env.NODE_ENV === 'development';

  const logEvent = async (eventSubtype?: SidekickEventLog['event_subtype']) => {
    const loggingData: Partial<SidekickEventLog> = {
      company_id: company.id,
      event,
      event_subtype: eventSubtype,
    };

    if (!isDevelopment && company.id) {
      await API.post(`/eventLog`, loggingData);
    }
  };

  return logEvent;
};

export default useLogEvent;
