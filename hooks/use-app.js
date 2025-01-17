import Constants from "expo-constants";
import * as MailComposer from "expo-mail-composer";

import useToast from "hooks/use-toast";

const useApp = () => {
  const toast = useToast();
  const version = Constants.manifest.version;
  const draftNewSupportEmail = () => {
    MailComposer.composeAsync({
      recipients: ["appsupport@disciple.tools"],
      subject: `DT App Support: v${version}`,
      body: "",
    }).catch((error) => {
      toast(error.toString(), true);
    });
  };
  return {
    version,
    draftNewSupportEmail,
  };
};
export default useApp;