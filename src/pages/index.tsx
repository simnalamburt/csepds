import React from 'react'
import './index.styl'

import shelf from './shelf.png'
import shelfTop from './shelf-top.png'

const data = Object.freeze([
  { entities:[
    { title:"ETL", desc:"교수학습 개발센터", link:"http://etl.snu.ac.kr" },
    { title:"mySNU", desc:"서울대학교 포털", link:"http://my.snu.ac.kr" },
    { title:"중앙도서관", link:"http://library.snu.ac.kr" },
    { title:"전공학술부", desc:"컴퓨터공학부 학생회", link:"//www.snucse.org/toor" },
  ]},
  { groupname:"1학년", entities:[
    { title:"컴퓨터의 개념 및 실습", desc:"민상렬", link:"http://archi.snu.ac.kr/courses/under/16_spring_computer_concept/" },
  ]},
  { groupname:"2학년", entities:[
    { title:"공업수학 2", desc:"김종권", link:"http://incpaper.snu.ac.kr/index.php/Em2016spring" },
    { title:"공업수학 2", desc:"권태경", link:"http://mmlab.snu.ac.kr/courses/2014_spring_engineering_mathematics/" },
    { title:"자료구조", desc:"문병로", link:"http://soar.snu.ac.kr/course/ds/20161/" },
    { title:"자료구조", desc:"Satti", link:"http://tcs.snu.kr/courses/ds2014/" },
    { title:"이산수학", desc:"김건희", link:"https://sites.google.com/a/vision.snu.ac.kr/4190101-16s/" },
    { title:"이산수학", desc:"Satti", link:"http://tcs.snu.kr/courses/dm2014/" },
    { title:"정보통신융합", desc:"권태경", link:"http://mmlab.snu.ac.kr/xe/?mid=course_under" },
    { title:"컴퓨터 프로그래밍", desc:"엄현상", link:"http://dcslab.snu.ac.kr/courses/cp2016s/" },
    { title:"논리설계", desc:"이창건", link:"http://rubis.snu.ac.kr/courses/1937507" },
    { title:"논리설계", desc:"장래혁", link:"http://etl.snu.ac.kr/" },
  ]},
  { groupname:"3학년", entities:[
    { title:"시스템 프로그래밍", desc:"엄헌영", link:"http://dcslab.snu.ac.kr/courses.php" },
    { title:"데이타베이스", desc:"문봉기", link:"http://etl.snu.ac.kr/enrol/index.php?id=75009" },
    { title:"데이타통신", desc:"전화숙", link:"http://mccl.snu.ac.kr/Courses02_2.php" },
    { title:"운영체제", desc:"조유근", link:"http://ssrnet.snu.ac.kr/course/os2014-1/index.htm" },
    { title:"컴퓨터구조", desc:"김지홍", link:"http://cares.snu.ac.kr/?view=contents&menuN=310" },
    { title:"프로그래밍 언어", desc:"이재진", link:"http://etl.snu.ac.kr/enrol/index.php?id=75012" },
    { title:"데이터마이닝과 정보검색", desc:"장병탁", link:"http://bi.snu.ac.kr/" },
    { title:"선형 및 비선형 계산모델", desc:"김명수", link:"http://3map.snu.ac.kr/" },
    { title:"알고리즘", desc:"박근수", link:"http://theory.snu.ac.kr/?page_id=106" },
  ]},
  { groupname:"4학년", entities:[
    { title:"컴퓨터 융합응용", desc:"민상렬", link:"http://archi.snu.ac.kr/courses/under/14_spring_computer_convergence/" },
    { title:"멀티코어 컴퓨팅", desc:"이재진", link:"http://etl.snu.ac.kr/enrol/index.php?id=75016" },
    { title:"프로젝트 2", link:"http://meslab.snu.ac.kr/courses/2014s/project/" },
    { title:"인공지능", desc:"장병탁", link:"http://bi.snu.ac.kr/" },
    { title:"VLSI 회로", desc:"전주식", link:"http://etl.snu.ac.kr/enrol/index.php?id=75014" },
    { title:"소프트웨어 응용", desc:"신영길", link:"http://etl.snu.ac.kr/enrol/index.php?id=76117" },
    { title:"컴퓨터 그래픽스", desc:"이제희", link:"http://mrl.snu.ac.kr/" },
    { title:"IT-리더십 세미나", desc:"신영길", link:"http://etl.snu.ac.kr/enrol/index.php?id=75026" },
    { title:"컴퓨터엔지니어를 위한 기술영어작문", desc:"McKay", link:"http://sc.snu.ac.kr/sclab/doku.php?id=education:courses" },
    { title:"인간컴퓨터 상호작용", desc:"서진욱", link:"http://etl.snu.ac.kr/enrol/index.php?id=75019" },
    { title:"소셜 네트워크 분석", desc:"김종권", link:"http://popeye.snu.ac.kr/" },
  ]}
]);

const Floor = ({floor, tag, id}) => {
  const click = course => {
    return () => window.open(course.link);
  };
  const offset = (i: number): number => (
    floor.length == 6 ? 30 + i*125 : 250 - floor.length*40 + i*150
  );

  const books = floor.map((course, i) =>
    <button onClick={click(course)} style={{left: offset(i)}} key={`${id}_${i}`}>
      <h1>{course.title}</h1>
      {course.desc}
    </button>);

  return (
    <div>
      {tag ? <span>{tag}</span> : null}
      {books}
    </div>
  );
};


// Slice entities into chunks
function chunk<T>(input: Array<T>, size: number): Array<Array<T>> {
  const array = input.slice(); // clone

  let ret = []
  while (array.length > 0) {
    ret.push(array.splice(0, size));
  }
  return ret;
}

const Bookshelf = () => {
  const floors = data.map((group, group_id) =>
    chunk(group.entities, 6).map((floor, floor_id) => {
      const id = `${group_id}.${floor_id}`;
      const tag = (group.groupname != null && floor_id == 0) ? group.groupname : null;
      return <Floor floor={floor} tag={tag} id={id}/>;
    })
  );

  // $FlowIssue: Flow cannot handle String.raw() yet
  const github = String.raw`<a href="https://github.com/simnalamburt/csepds" class="github-corner"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>`;

  return (
    <div className='csepds'>
      <div dangerouslySetInnerHTML={{__html: github}}/>
      {floors}
    </div>
  );
};

export default Bookshelf
