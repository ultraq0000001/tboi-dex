import { StyleSheet, Text, View } from 'react-native';

const QUALITY_COLORS = ['#8a8a8a', '#cfcfcf', '#5bc0ff', '#c77dff', '#ffd23f'];

export function QualityStars({ quality }: { quality: 0 | 1 | 2 | 3 | 4 }) {
  return (
    <View style={styles.row}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Text
          key={i}
          style={[styles.star, { color: i <= quality ? QUALITY_COLORS[quality] : '#3a3a3a' }]}
        >
          ★
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  star: { fontSize: 16, marginRight: 2 },
});
