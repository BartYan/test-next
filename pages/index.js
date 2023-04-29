import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // console.log('fetch post data');

  // async function GetImage() {
  //   console.log('yo2');
  //   try {
  //     const response = await fetch('http://localhost:8000/index?name=Bart', {
  //       mode: 'no-cors',
  //       method: 'get',
  //     });
  //     const data = await response.text();

  //     if (data) {
  //       const json = JSON.parse(data);
  //       console.log('newjson', json);
  //     } else {
  //       console.error('Odpowiedź sieciowa nie zawiera danych.');
  //     }
  //   } catch (err) {
  //     console.error('Błąd pobierania danych:', err);
  //   }
  // }

  // GetImage();

  // const coords = '0.5832604169845581,0.8792206645011902,-3.999200259841018e-07,0.0,0.6288155913352966,0.854025661945343,0.025876091793179512,0.0,0.6658138632774353,0.8057206869125366,0.02948438934981823,0.0,0.6787540912628174,0.7332387566566467,0.027764927595853806,0.0,0.6726076602935791,0.6829049587249756,0.025506196543574333,0.0,0.7011682987213135,0.8067655563354492,-0.004975150339305401,0.0,0.7152688503265381,0.6792581081390381,-0.010388839058578014,0.0,0.6941640377044678,0.6632382869720459,-0.0035027447156608105,0.0,0.6827796697616577,0.6892639398574829,0.004106671083718538,0.0,0.6885053515434265,0.8046397566795349,-0.022723045200109482,0.0,0.6995010375976562,0.6527712345123291,-0.030067196115851402,0.0,0.6720864176750183,0.6492294669151306,-0.017602061852812767,0.0,0.6642061471939087,0.6839784979820251,-0.005800939630717039,0.0,0.6680094003677368,0.7908855676651001,-0.03747957944869995,0.0,0.6818369030952454,0.6411173343658447,-0.04208211600780487,0.0,0.6532726287841797,0.6477537751197815,-0.022938719019293785,0.0,0.6437857747077942,0.689441442489624,-0.007903148420155048,0.0,0.639646053314209,0.7781006097793579,-0.0497405044734478,0.0,0.6496881246566772,0.6573780179023743,-0.050452884286642075,0.0,0.6293652057647705,0.6656556129455566,-0.035473402589559555,0.0,0.6199742555618286,0.7110483646392822,-0.0230907890945673,0.0';

  // async function test() {
  //   console.log('yo3');
  //   const response = await fetch('http://localhost:8000/api/predict', {
  //     // const response = await fetch('http://127.0.0.1:8000/api/predict', {
  //     mode: 'no-cors',
  //     method: 'post',
  //     // headers: {
  //     //   'Content-Type': 'text/plain',
  //     // },
  //     body: { data: coords },
  //   });
  //   const responseData2 = await response.json();
  //   console.log('predict', responseData2);
  // }
  // test();

  // async function test2() {
  //   const res = await fetch(`http://localhost:8000/api/predict`, {
  //     method: 'POST',
  //     // mode: 'no-cors',
  //     body: { data: coords },
  //   });
  //   const data3 = await res.json();
  //   console.log('data3', data3);
  // }

  // test2();

  // async function fetchData(name, description) {
  //   const apiUrl = 'http://127.0.0.1:8000/api/predict';
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       data: [name, description],
  //     }),
  //   };

  //   const response = await fetch(apiUrl, options);
  //   console.log('sdasdasdasasddsa', response);
  //   // if (!response.ok) {
  //   //   // const error = new Error('HTTP Error');
  //   //   error.status = response.status;
  //   //   const responseText = await response.text();
  //   //   console.error(`HTTP Error: ${error.status}\n${responseText}`);
  //   //   // throw error;
  //   // }

  //   const responseData = await response.json();
  //   return responseData;
  // }

  // fetchData('data', coords);
  // DZIAŁA
  // async function fetchData() {
  //   // const url = 'http://localhost:8000/api/predict';
  //   const url =
  //     'http://127.0.0.1:8000/api/predict?data=0.5832604169845581%2C0.8792206645011902%2C-3.999200259841018e-07%2C0.0%2C0.6288155913352966%2C0.854025661945343%2C0.025876091793179512%2C0.0%2C0.6658138632774353%2C0.8057206869125366%2C0.02948438934981823%2C0.0%2C0.6787540912628174%2C0.7332387566566467%2C0.027764927595853806%2C0.0%2C0.6726076602935791%2C0.6829049587249756%2C0.025506196543574333%2C0.0%2C0.7011682987213135%2C0.8067655563354492%2C-0.004975150339305401%2C0.0%2C0.7152688503265381%2C0.6792581081390381%2C-0.010388839058578014%2C0.0%2C0.6941640377044678%2C0.6632382869720459%2C-0.0035027447156608105%2C0.0%2C0.6827796697616577%2C0.6892639398574829%2C0.004106671083718538%2C0.0%2C0.6885053515434265%2C0.8046397566795349%2C-0.022723045200109482%2C0.0%2C0.6995010375976562%2C0.6527712345123291%2C-0.030067196115851402%2C0.0%2C0.6720864176750183%2C0.6492294669151306%2C-0.017602061852812767%2C0.0%2C0.6642061471939087%2C0.6839784979820251%2C-0.005800939630717039%2C0.0%2C0.6680094003677368%2C0.7908855676651001%2C-0.03747957944869995%2C0.0%2C0.6818369030952454%2C0.6411173343658447%2C-0.04208211600780487%2C0.0%2C0.6532726287841797%2C0.6477537751197815%2C-0.022938719019293785%2C0.0%2C0.6437857747077942%2C0.689441442489624%2C-0.007903148420155048%2C0.0%2C0.639646053314209%2C0.7781006097793579%2C-0.0497405044734478%2C0.0%2C0.6496881246566772%2C0.6573780179023743%2C-0.050452884286642075%2C0.0%2C0.6293652057647705%2C0.6656556129455566%2C-0.035473402589559555%2C0.0%2C0.6199742555618286%2C0.7110483646392822%2C-0.0230907890945673%2C0.0';

  //   const data = {
  //     data: {
  //       coors:
  //         '0.5832604169845581,0.8792206645011902,-3.999200259841018e-07,0.0,0.6288155913352966,0.854025661945343,0.025876091793179512,0.0,0.6658138632774353,0.8057206869125366,0.02948438934981823,0.0,0.6787540912628174,0.7332387566566467,0.027764927595853806,0.0,0.6726076602935791,0.6829049587249756,0.025506196543574333,0.0,0.7011682987213135,0.8067655563354492,-0.004975150339305401,0.0,0.7152688503265381,0.6792581081390381,-0.010388839058578014,0.0,0.6941640377044678,0.6632382869720459,-0.0035027447156608105,0.0,0.6827796697616577,0.6892639398574829,0.004106671083718538,0.0,0.6885053515434265,0.8046397566795349,-0.022723045200109482,0.0,0.6995010375976562,0.6527712345123291,-0.030067196115851402,0.0,0.6720864176750183,0.6492294669151306,-0.017602061852812767,0.0,0.6642061471939087,0.6839784979820251,-0.005800939630717039,0.0,0.6680094003677368,0.7908855676651001,-0.03747957944869995,0.0,0.6818369030952454,0.6411173343658447,-0.04208211600780487,0.0,0.6532726287841797,0.6477537751197815,-0.022938719019293785,0.0,0.6437857747077942,0.689441442489624,-0.007903148420155048,0.0,0.639646053314209,0.7781006097793579,-0.0497405044734478,0.0,0.6496881246566772,0.6573780179023743,-0.050452884286642075,0.0,0.6293652057647705,0.6656556129455566,-0.035473402589559555,0.0,0.6199742555618286,0.7110483646392822,-0.0230907890945673,0.0',
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       // body: JSON.stringify(data), // konwertujemy obiekt na JSON i wysyłamy jako ciało żądania
  //     });

  //     if (!response.ok) {
  //       throw new Error('HTTP error! Status: ' + response.status);
  //     }

  //     const responseData = await response.json();
  //     console.log('NEW', responseData);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
  // fetchData();

  const data4 = {
    data: {
      coors:
        '0.5832604169845581,0.8792206645011902,-3.999200259841018e-07,0.0,0.6288155913352966,0.854025661945343,0.025876091793179512,0.0,0.6658138632774353,0.8057206869125366,0.02948438934981823,0.0,0.6787540912628174,0.7332387566566467,0.027764927595853806,0.0,0.6726076602935791,0.6829049587249756,0.025506196543574333,0.0,0.7011682987213135,0.8067655563354492,-0.004975150339305401,0.0,0.7152688503265381,0.6792581081390381,-0.010388839058578014,0.0,0.6941640377044678,0.6632382869720459,-0.0035027447156608105,0.0,0.6827796697616577,0.6892639398574829,0.004106671083718538,0.0,0.6885053515434265,0.8046397566795349,-0.022723045200109482,0.0,0.6995010375976562,0.6527712345123291,-0.030067196115851402,0.0,0.6720864176750183,0.6492294669151306,-0.017602061852812767,0.0,0.6642061471939087,0.6839784979820251,-0.005800939630717039,0.0,0.6680094003677368,0.7908855676651001,-0.03747957944869995,0.0,0.6818369030952454,0.6411173343658447,-0.04208211600780487,0.0,0.6532726287841797,0.6477537751197815,-0.022938719019293785,0.0,0.6437857747077942,0.689441442489624,-0.007903148420155048,0.0,0.639646053314209,0.7781006097793579,-0.0497405044734478,0.0,0.6496881246566772,0.6573780179023743,-0.050452884286642075,0.0,0.6293652057647705,0.6656556129455566,-0.035473402589559555,0.0,0.6199742555618286,0.7110483646392822,-0.0230907890945673,0.0',
    },
  };

  async function fetchData2(data) {
    const url = 'http://localhost:8000/api/predict';

    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data),
        body: data,
      });

      if (!response.ok) {
        throw new Error('HTTP error! Status: ' + response.status);
      }

      const responseData = await response.json();
      console.log('responseData4', responseData);
    } catch (e) {
      console.log('catch', e);
    }
  }
  fetchData2(data4);

  // async function fetchData2() {
  //   const url = 'http://127.0.0.1:8000/api/predict';
  //   const data = { data: [coords] }; // zmień wartość "data" na swoje dane

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (!response.ok) {
  //       throw new Error('HTTP error! Status: ' + response.status);
  //     }

  //     const responseData = await response.json();
  //     console.log('yooooooo', responseData);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // fetchData2();

  // async function fetchData2() {
  //   const url = 'http://127.0.0.1:8000/api/predict';
  //   const data = { data: [coords] }; // zmień wartość "data" na swoje dane

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (!response.ok) {
  //       throw new Error('HTTP error! Status: ' + response.status);
  //     }

  //     const responseData = await response.json();
  //     console.log('yooooooo', responseData);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // fetchData2();

  // async function fetchData() {
  //   const url = 'http://localhost:8000/api/predict';
  //   const data = {
  //     data: '0.5832604169845581,0.8792206645011902,-3.999200259841018e-07,0.0,0.6288155913352966,0.854025661945343,0.025876091793179512,0.0,0.6658138632774353,0.8057206869125366,0.02948438934981823,0.0,0.6787540912628174,0.7332387566566467,0.027764927595853806,0.0,0.6726076602935791,0.6829049587249756,0.025506196543574333,0.0,0.7011682987213135,0.8067655563354492,-0.004975150339305401,0.0,0.7152688503265381,0.6792581081390381,-0.010388839058578014,0.0,0.6941640377044678,0.6632382869720459,-0.0035027447156608105,0.0,0.6827796697616577,0.6892639398574829,0.004106671083718538,0.0,0.6885053515434265,0.8046397566795349,-0.022723045200109482,0.0,0.6995010375976562,0.6527712345123291,-0.030067196115851402,0.0,0.6720864176750183,0.6492294669151306,-0.017602061852812767,0.0,0.6642061471939087,0.6839784979820251,-0.005800939630717039,0.0,0.6680094003677368,0.7908855676651001,-0.03747957944869995,0.0,0.6818369030952454,0.6411173343658447,-0.04208211600780487,0.0,0.6532726287841797,0.6477537751197815,-0.022938719019293785,0.0,0.6437857747077942,0.689441442489624,-0.007903148420155048,0.0,0.639646053314209,0.7781006097793579,-0.0497405044734478,0.0,0.6496881246566772,0.6573780179023743,-0.050452884286642075,0.0,0.6293652057647705,0.6656556129455566,-0.035473402589559555,0.0,0.6199742555618286,0.7110483646392822,-0.0230907890945673,0.0',
  //   }; // obiekt z jednym kluczem "data"

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: JSON.stringify(data), // konwertujemy obiekt na JSON i wysyłamy jako ciało żądania
  //     });

  //     if (!response.ok) {
  //       throw new Error('HTTP error! Status: ' + response.status);
  //     }

  //     const responseData = await response.json();
  //     console.log(responseData);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
  // fetchData();

  // async function fetchData5() {
  //   const url = 'http://localhost:8000/api/predict';
  //   const data = {
  //     data: '0.5832604169845581,0.8792206645011902,-3.999200259841018e-07,0.0,0.6288155913352966,0.854025661945343,0.025876091793179512,0.0,0.6658138632774353,0.8057206869125366,0.02948438934981823,0.0,0.6787540912628174,0.7332387566566467,0.027764927595853806,0.0,0.6726076602935791,0.6829049587249756,0.025506196543574333,0.0,0.7011682987213135,0.8067655563354492,-0.004975150339305401,0.0,0.7152688503265381,0.6792581081390381,-0.010388839058578014,0.0,0.6941640377044678,0.6632382869720459,-0.0035027447156608105,0.0,0.6827796697616577,0.6892639398574829,0.004106671083718538,0.0,0.6885053515434265,0.8046397566795349,-0.022723045200109482,0.0,0.6995010375976562,0.6527712345123291,-0.030067196115851402,0.0,0.6720864176750183,0.6492294669151306,-0.017602061852812767,0.0,0.6642061471939087,0.6839784979820251,-0.005800939630717039,0.0,0.6680094003677368,0.7908855676651001,-0.03747957944869995,0.0,0.6818369030952454,0.6411173343658447,-0.04208211600780487,0.0,0.6532726287841797,0.6477537751197815,-0.022938719019293785,0.0,0.6437857747077942,0.689441442489624,-0.007903148420155048,0.0,0.639646053314209,0.7781006097793579,-0.0497405044734478,0.0,0.6496881246566772,0.6573780179023743,-0.050452884286642075,0.0,0.6293652057647705,0.6656556129455566,-0.035473402589559555,0.0,0.6199742555618286,0.7110483646392822,-0.0230907890945673,0.0',
  //   }; // zmień wartość "data" na swoje dane

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       mode: 'no-cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     // if (!response.ok) {
  //     //   throw new Error('HTTP error! Status: ' + response.status);
  //     // }

  //     const responseData = await response.json();
  //     console.log('TO OOOOOOO', responseData);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // fetchData5();
  // async function fetchData2(name, description) {
  //   const apiUrl = 'http://127.0.0.1:8000/api/predict';
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: `name=${encodeURIComponent(name)}&description=${encodeURIComponent(
  //       description
  //     )}`,
  //   };

  //   const response = await fetch(apiUrl, options);
  //   console.log('dadsadasdas', response);
  //   if (!response.ok) {
  //     const error = new Error('HTTP Error');
  //     error.status = response.status;
  //     const responseText = await response.text();
  //     console.error(`HTTP Error: ${error.status}\n${responseText}`);
  //     throw error;
  //   }

  //   const responseData = await response.json();
  //   return responseData;
  // }
  // fetchData2('data', coords);

  // const [test, setTest] = useState(false);
  // const [test2, setTest2] = useState(false);

  useEffect(() => {
    // const response = await fetch('http://localhost:8000/index?name=Bart', {
    //   mode: 'no-cors',
    //   method: 'get'
    // });
    // const responseData = await response.text();
    // let jsonResponse;
    // try {
    //   jsonResponse = JSON.parse(responseData);
    // } catch (err) {
    //   console.error('Nieprawidłowy format JSON', err);
    // }
    // console.log('TOTOTOTOT',jsonResponse);
    // async function GetImage() {
    //   console.log('yo');
    //   const response = await fetch('http://localhost:8000/index?name=Bart', {
    //     mode: 'no-cors',
    //     method: 'get',
    //     // headers: {
    //     //   'Content-Type': 'application/json',
    //     //   Accept: 'application/json',
    //     // },
    //     // body: JSON.stringify({
    //     //     name: 'Bart'
    //     // })
    //   });
    //   // const resp = await response.json();
    //   // console.log('new resp TOTO', resp);
    //   const responseData = await response.text();
    //   let jsonResponse;
    //   try {
    //     jsonResponse = JSON.parse(responseData);
    //     console.log('JSON.parse(responseData)', JSON.parse(responseData));
    //   } catch (err) {
    //     console.error('Nieprawidłowy format JSON', err);
    //   }
    //   console.log('jsonResponse', jsonResponse);
    // }
  });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              By{' '}
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
