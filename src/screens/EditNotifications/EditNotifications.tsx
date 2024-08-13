import { useState } from 'react';
import { ScrollView, Switch } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { SettingItem } from '@/components/molecules';
import { useTranslation } from 'react-i18next';

function EditNotifications() {
  const { gutters } = useTheme();
  const { t } = useTranslation(['editNotifications']);

  const [follows, setFollows] = useState(true);
  const [likesOnWorkouts, setLikesOnWorkouts] = useState(true);
  const [commentsOnWorkouts, setCommentsOnWorkouts] = useState(true);
  const [commentMentions, setCommentMentions] = useState(true);
  const [workoutDiscussions, setWorkoutDiscussions] = useState(true);
  const [subscribeToEmails, setSubscribeToEmails] = useState(false);
  const [restTimer, setRestTimer] = useState(true);

  return (
    <SafeScreen>
      <ScrollView style={[gutters.paddingBottom_16, gutters.paddingTop_16]}>
        <SettingItem label={t('follows')} icon="user-plus">
          <Switch value={follows} onValueChange={setFollows} />
        </SettingItem>

        <SettingItem label={t('likesOnWorkouts')} icon="thumbs-up">
          <Switch value={likesOnWorkouts} onValueChange={setLikesOnWorkouts} />
        </SettingItem>

        <SettingItem label={t('commentsOnWorkouts')} icon="comment">
          <Switch
            value={commentsOnWorkouts}
            onValueChange={setCommentsOnWorkouts}
          />
        </SettingItem>

        <SettingItem label={t('commentMentions')} icon="at">
          <Switch value={commentMentions} onValueChange={setCommentMentions} />
        </SettingItem>

        <SettingItem label={t('workoutDiscussions')} icon="comments">
          <Switch
            value={workoutDiscussions}
            onValueChange={setWorkoutDiscussions}
          />
        </SettingItem>

        <SettingItem label={t('subscribeToEmails')} icon="envelope">
          <Switch
            value={subscribeToEmails}
            onValueChange={setSubscribeToEmails}
          />
        </SettingItem>

        <SettingItem label={t('restTimer')} icon="clock">
          <Switch value={restTimer} onValueChange={setRestTimer} />
        </SettingItem>
      </ScrollView>
    </SafeScreen>
  );
}

export default EditNotifications;
