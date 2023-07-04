import React, { FC, useEffect, useState } from 'react';
import { Box, Container, Card, Typography, Skeleton, Divider } from '@mui/material';
import { GetServerSideProps } from 'next';
import BaseLayout from '@/components/layout/base';
import { Entry, MetaContent } from '@/models';
import { isMongoId } from '@/utils';
import { createAxios } from '@/axios';
import EditInput from '@/components/ui/editInput';

interface PropsEntryPage {
  id: string;
  title: string;
}
const EntryPage: FC<PropsEntryPage> = props => {
  const [entryState, setEntryState] = useState<Entry>({
    _id: '',
    title: null,
    description: undefined,
    userID: '',
    createdAt: '',
    updatedAt: '',
    status: 'pending',
  });
  const { title, id } = props;
  const metaDescription: MetaContent = {
    description: title,
  };
  const getEntry = async () => {
    const {
      data: { data },
    } = await createAxios.get(`/entries/getentrybyid?id=${id}`);
    setEntryState(data.entry);
  };
  useEffect(() => {
    getEntry();
  }, []);
  console.log(entryState);
  return (
    <BaseLayout title={title} meta={metaDescription}>
      <Container maxWidth="lg">
        <Card sx={{ width: '100%', minHeight: '25vh' }}>
          <Typography variant="h4" color="primary" sx={{ padding: '15px' }}>
            {entryState.title !== null ? (
              <EditInput entry={entryState} text={entryState.title || ''} sourge="title" id={id} />
            ) : (
              <Skeleton animation="wave" />
            )}
          </Typography>
          <Divider />
          <Typography variant="body1" sx={{ padding: '15px' }}>
            {entryState.description !== undefined ? (
              <EditInput
                entry={entryState}
                text={entryState.description || ''}
                sourge="description"
                id={id}
              />
            ) : (
              <Skeleton animation="wave" />
            )}
          </Typography>
        </Card>
      </Container>
    </BaseLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ctx => {
  //console.log(ctx, 'context');
  const { id } = ctx.params as { id: string };
  if (isMongoId(id) == 'is not mongoId') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const {
    data: { data },
  } = await createAxios.get(`/entries/getentrybyid?id=${id}`);
  const { entry } = data;
  if (entry == null) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      id,
      title: data.entry.title,
    },
  };
};
export default EntryPage;
