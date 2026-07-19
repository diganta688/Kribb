import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        {/* Added md="home" for Android */}
        <Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="saved">
        {/* Added md="favorite" for Android */}
        <Icon sf="heart.fill" md="favorite" />
        <Label>saved</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        {/* Added md="person" for Android */}
        <Icon sf="person.fill" md="person" />
        <Label>profile</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        {/* Added md="search" for Android */}
        <Icon sf="magnifyingglass" md="search" />
        <Label>search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
