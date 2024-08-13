import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar, UserInfo, Counter } from '@/components/atoms';
import { useTheme } from '@/theme';
import { useTranslation } from 'react-i18next';

interface ProfileHeaderProps {
  avatarUri: string;
  name: string;
  workouts: number;
  followers: number;
  following: number;
}

function ProfileHeader({
  avatarUri,
  name,
  workouts,
  followers,
  following,
}: ProfileHeaderProps) {
  const { layout, gutters } = useTheme();
  const { t } = useTranslation('profile');

  return (
    <View style={[layout.row, layout.justifyCenter, gutters.marginTop_16]}>
      <Avatar uri={avatarUri} />
      <View style={[layout.flex_1]}>
        <UserInfo name={name} />
        <View style={[layout.row, layout.justifyBetween, gutters.marginTop_12]}>
          <Counter label={t('workouts')} value={workouts} />
          <Counter label={t('followers')} value={followers} />
          <Counter label={t('following')} value={following} />
        </View>
      </View>
    </View>
  );
}

ProfileHeader.propTypes = {
  avatarUri: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  workouts: PropTypes.number.isRequired,
};

export default ProfileHeader;
