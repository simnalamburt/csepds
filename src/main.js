// @flow
import React from 'react'
import ReactDOM from 'react-dom'


const data = Object.freeze([
  { entities:[
    { title:"ETL", desc:"교수학습 개발센터", link:"http://etl.snu.ac.kr" },
    { title:"mySNU", desc:"서울대학교 포털", link:"http://my.snu.ac.kr" },
    { title:"중앙도서관", link:"http://library.snu.ac.kr" },
    { title:"전공학술부", desc:"컴퓨터공학부 학생회", link:"//www.snucse.org/toor" },
  ]},
  { groupname:"1학년", entities:[
    { title:"컴퓨터의 개념 및 실습", desc:"민상렬", link:"http://archi.snu.ac.kr/courses/under/14_spring_computer_concept/" },
  ]},
  { groupname:"2학년", entities:[
    { title:"공업수학 2", desc:"권태경", link:"http://mmlab.snu.ac.kr/courses/2014_spring_engineering_mathematics/" },
    { title:"자료구조", desc:"문병로", link:"http://soar.snu.ac.kr/course/ds/20141/" },
    { title:"자료구조", desc:"Satti", link:"http://tcs.snu.kr/courses/ds2014/" },
    { title:"이산수학", desc:"Satti", link:"http://tcs.snu.kr/courses/dm2014/" },
    { title:"정보통신융합", desc:"권태경", link:"http://mmlab.snu.ac.kr/xe/?mid=course_under" },
    { title:"컴퓨터 프로그래밍", desc:"엄현상", link:"http://dcslab.snu.ac.kr/courses.php" },
    { title:"논리설계", desc:"이창건", link:"http://rubis.snu.ac.kr/courses/7499" },
    { title:"논리설계", desc:"장래혁", link:"http://etl.snu.ac.kr/" },
    { title:"논리설계실험", desc:"이창건", link:"http://rubis.snu.ac.kr/courses/7489" },
    { title:"논리설계실험", desc:"장래혁", link:"http://etl.snu.ac.kr/enrol/index.php?id=75007" },
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
  function offset(i: number): number {
    if (floor.length == 6) { return 30 + i*125; }
    else { return 250 - floor.length*40 + i*150; }
  }

  const books = floor.map((course, i) =>
    <a style={{left: offset(i)}} href={course.link} key={`${id}_${i}`}>
      <h1>{course.title}</h1>
      {course.desc}
    </a>);

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

const Bookshelf = ({data}) => {
  const floors = data.map((group, group_id) =>
    chunk(group.entities, 6).map((floor, floor_id) => {
      const id = `${group_id}.${floor_id}`;
      const tag = (group.groupname != null && floor_id == 0) ? group.groupname : null;
      return <Floor floor={floor} tag={tag} id={id} />;
    })
  );

  return (
    <div className='csepds'>
      <div/>
      {floors}
    </div>
  );
};


ReactDOM.render(
  <Bookshelf data={data} />,
  document.getElementById('target')
);
