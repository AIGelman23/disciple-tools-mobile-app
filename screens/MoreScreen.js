import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import {
  ChevronForwardIcon,
  ChevronBackIcon,
  PostIcon,
} from "components/Icon";
import OfflineBar from "components/OfflineBar";
import TitleBar from "components/TitleBar";
import ListItem from "components/ListItem";

import useI18N from "hooks/use-i18n";
//import useCustomPostTypes from "hooks/use-custom-post-types";
import useSettings from "hooks/use-settings";
import useStyles from "hooks/use-styles";

import { ScreenConstants } from "constants";

import { localStyles } from './MoreScreen.styles';

const MoreScreen = ({ navigation, route }) => {

  // NOTE: invoking this hook causes the desired re-render onBack()
  useIsFocused();

  //const { data, error, isLoading, isValidating, mutate } = useCustomPostTypes();
  const { styles, globalStyles } = useStyles(localStyles);
  const { i18n, isRTL, locale } = useI18N();
  const { settings } = useSettings();
  if (!settings) console.log(`settings: ${ JSON.stringify(settings)}`);

  const PostButton = ({ label, type }) => (
    <ListItem
      startComponent={<PostIcon />}
      label={label}
      endComponent={
        isRTL ? <ChevronBackIcon style={globalStyles.icon} /> : <ChevronForwardIcon style={globalStyles.icon} />
      }
      onPress={() => {
        navigation.push(ScreenConstants.LIST, {
          type,
          filter: null 
        })}
      }
    />
  );

  // TODO: translate
  // TODO: detect Custom Post Types dynamically
  const trainingsLabel = "Trainings";
  const trainingsPostType = "trainings";
  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <OfflineBar />
      <PostButton label={trainingsLabel} type={trainingsPostType} />
    </SafeAreaView>
  );
};
export default MoreScreen;