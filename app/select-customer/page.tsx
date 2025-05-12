'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getStoredUser } from '@/lib/auth';
import { type Customer } from '@/lib/types';
import { CustomerSelect } from './components/customer-select';
import { api } from '@/lib/api';


export default function SelectCustomerPage() {
  const router = useRouter();
  const [customers, setCustomers] = useState<Customer[] | null>(null);

  useEffect(() => {
    console.log('on customer account selection page');
    const storedUser = getStoredUser();
    if (!storedUser) {
      console.log('no stored user');
      // router.push('/');
      return;
    }
    localStorage.removeItem('selected_site');

    const allCustomers = localStorage.getItem('all_customers');
    if (allCustomers) {
      try {
        const parsedCustomers = JSON.parse(allCustomers);
        setCustomers(parsedCustomers);
      } catch (error) {
        console.error('Error parsing stored customers:', error);
        router.push('/');
      }
    } else {
      router.push('/');
    }
  }, [router]);


  useEffect(() => {
    if (true) {
      (async () => {
        try {
          // const response = await getAccessTokenSilently({detailedResponse: true});
          const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImN5RXVScThINzlkZkNWd1FoOUpKVSJ9.eyJpc3MiOiJodHRwczovL2Rldi16dWVjdW9mZWhxaTVyZXljLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHwwMzBmNDJlYi0wNjQyLTQ3NjctODQyYi0zYTJjMDkxOWE4OTYiLCJhdWQiOlsiaHR0cHM6Ly9kZXYtenVlY3VvZmVocWk1cmV5Yy51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZGV2LXp1ZWN1b2ZlaHFpNXJleWMudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTc0NzA0NzU2MSwiZXhwIjoxNzQ3MTMzOTYxLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXpwIjoid3lOd2xFdzJ6M0hUTUluSzNIS0JJeUlaOVY4YzFPaXgifQ.OC3D5ggvfdeNz6ETGPYPdq3RzojOtNJVkIiFetldfO6RzheyYb13VDcMXGd2rQvF-tHdS33RNuoB-qs6TKPyziVqpDHgWl19WMzEcNX2ttfN0Lfe6fgul8BZQ2Hsi6O2-44kC46Xx-KoYWwkWgyxcb8HxoDq33KlLWs0hz8bNEoX7ccaFaKXEq5NRk1YqsoPoWmhGsYNKMj8KN0o0Oh8i8XWdDRdjEli2yomjNfectddCfNCKdxFHQboCzR-7HjY2JBc-FyKFUEISNvD7WxgbNX7W6Wld-mdqUUqVbS9L2BRo7AoM4IhyJuboTD3ZoF11lth0jt9nyoizDVGJpxPOw";
          const idToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImN5RXVScThINzlkZkNWd1FoOUpKVSJ9.eyJuaWNrbmFtZSI6Imxva2VzaCBzaW5naCIsIm5hbWUiOiJsb2tlc2guZGFudUByaW1iYS5haSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8xM2U0NjIzNWVhZTg2NjA1Yjk3YTZhZDcxNjMwMmZkMT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmxvLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDI1LTA1LTEyVDEwOjU5OjE3LjYwNVoiLCJlbWFpbCI6Imxva2VzaC5kYW51QHJpbWJhLmFpIiwiaXNzIjoiaHR0cHM6Ly9kZXYtenVlY3VvZmVocWk1cmV5Yy51cy5hdXRoMC5jb20vIiwiYXVkIjoid3lOd2xFdzJ6M0hUTUluSzNIS0JJeUlaOVY4YzFPaXgiLCJzdWIiOiJhdXRoMHwwMzBmNDJlYi0wNjQyLTQ3NjctODQyYi0zYTJjMDkxOWE4OTYiLCJpYXQiOjE3NDcwNDc1NjEsImV4cCI6MTc0NzA4MzU2MSwic2lkIjoiaDFzZzF2OWVDckVILWNuYXZOdmZXaU9Fb3liVF96cWYiLCJub25jZSI6IldtTlpiMHc1V210TVUyNDBYM05KUlVwUFJtMHhSVGhzTWxWVFNFNVRSVWRGYUVrd1V6ZEpSVTFqTUE9PSJ9.Dh_-QF27vS0qyOz_7cLAvU5dsUpgrrBZ3d9Xf0kC7Zye7lAo2yeGLWVWpqI0atY5uqUXWRfCFc0nlEkPYwKXZ_qHGNJxok7B5t2kC5XlKsxaH6lYfJI_tP8DmrJLR5GJgN5Xc-Tpb2GtmCDSO_JxfzQF4xWy7uPJ2RMj_5i1RJdfGDq5YuPe825CfC7_M_xE3qbmoNB1yPvAMG4vjy39I3tlD7-8qSCGp4E2lYILIzHEQ_GIiZX0Ycvq0V3ZgxKHSlBW8ltz4Mqy5qLgb2SyiJpMKYUqyAau6nFXKF5DTXHmrlGFFYESRDM090KzDldXXe9e7nbl83idxRrnkLMKnA";
          const customerId = localStorage.getItem('customer_id') || '';
          if (!customerId) {
            router.push('/select-customer');
          }

          // store the token in local storage
          localStorage.setItem('access_token', accessToken);
          localStorage.setItem('id_token', idToken);
          console.log('access_token', accessToken);
          api.setTokens(accessToken, idToken, customerId);
          // for debugging
          console.log('access_token', accessToken);
          console.log('id_token', idToken);
          // console.log('user', user);

          // fetch user info from backend
          let userInfoResponse;
          try {
            userInfoResponse = await getUserInfo();
            const sessionResponse = await createUserSession();
            console.log('sessionResponse', sessionResponse);
            console.log('userInfoResponse', userInfoResponse);
            console.log('getUserInfo call succeeded');
          } catch (error) {
            console.error('getUserInfo call failed:', error);
            // Trigger logout on any error
            api.logout();
            logout({ logoutParams: { returnTo: window.location.origin } });
            console.log('logging out from callback page');
          }

          // save user info in local storage
          if (userInfoResponse) {
            localStorage.setItem('user', JSON.stringify(userInfoResponse.user));
            localStorage.setItem('all_customers', JSON.stringify(userInfoResponse.customers));
          }

          // for debugging
          console.log('user from backend', userInfoResponse?.user);
          console.log('all_customers from backend', userInfoResponse?.customers);

          // if there is only one customer, select it
          if (userInfoResponse?.customers && userInfoResponse.customers.length === 1) {
            await selectCustomer(userInfoResponse.customers[0].id);
          }
          console.log('redirecting to home');
          router.push('/'); // redirect after processing
        } catch (err) {
          console.error('Error getting token:', err);
        }
      })();
    }
  }, []);


  if (!customers) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return <CustomerSelect customers={customers} />;
}