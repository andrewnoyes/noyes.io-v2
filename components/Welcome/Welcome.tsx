import { Flex, Text, Title } from '@mantine/core';
import MDXContent from '../mdx-test.mdx';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Flex align="center" m="auto">
        <MDXContent />
      </Flex>
    </>
  );
}
