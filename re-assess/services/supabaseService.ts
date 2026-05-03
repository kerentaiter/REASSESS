import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vpuxnkudhaflyygpnxvq.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ocgrUJbuEg9pXckWm7IivQ_kaMiO-EG';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const logUsage = async (actionName: string, eventData: any = {}) => {
  try {
    const { error } = await supabase
      .from('usage_logs')
      .insert([
        {
          action: actionName,
          data: eventData,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Error logging to Supabase:', error);
    }
  } catch (err) {
    console.error('Exception logging to Supabase:', err);
  }
};
