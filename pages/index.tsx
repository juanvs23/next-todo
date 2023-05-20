import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import BaseLayout from '@/components/layout/base';
import { MetaContent } from '@/models/nexts';
import { Grid, Card, CardHeader, CardContent } from '@mui/material';
import { EntryList, NewEntry } from '../components/ui';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  const metaDescription: MetaContent = {
    description: 'Este sitio es una pagina que muestra un listado completo de todos los pokemons',
  };
  return (
    <BaseLayout title={'home'} meta={metaDescription}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ minHeight: 'calc(100vh - 150px)' }}>
            <CardHeader title={'Pendientes'} component={'h2'} sx={{ textAlign: 'center' }} />
            <CardContent>
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ minHeight: 'calc(100vh - 150px)' }}>
            <CardHeader title={'En proceso'} component={'h2'} sx={{ textAlign: 'center' }} />
            <CardContent>
              <EntryList status="inProgress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ minHeight: 'calc(100vh - 150px)' }}>
            <CardHeader title={'Completadas'} component={'h2'} sx={{ textAlign: 'center' }} />
            <CardContent>
              <EntryList status="Completed" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </BaseLayout>
  );
}
