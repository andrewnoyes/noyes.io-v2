import bundleAnalyzer from '@next/bundle-analyzer';
import createMDX from '@next/mdx';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = createMDX({});

export default withBundleAnalyzer(
  withMDX({
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  })
);
