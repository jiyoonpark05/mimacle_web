import List from "@/components/common/List";

const StoryList = () => {
  const STORY_DUMMY_DATA = [
    {
      title: "마작의 유래",
      img: "/sample_thumbnail.jpeg",
      contents:
        "마작의 기원에 대해서는 의견이 분분하다. 정화가 명나라 시대 서역으로 항해하는 동안 지루함을 달래기 위해 마작을 발명했다는 설도 있으나 역사적인 근거는 없다. ",
    },
    {
      title: "麻将인가 麻雀인가",
      img: "/sample_thumbnail.jpeg",
      contents:
        "마작의 기원에 대해서는 의견이 분분하다. 정화가 명나라 시대 서역으로 항해하는 동안 지루함을 달래기 위해 마작을 발명했다는 설도 있으나 역사적인 근거는 없다. ",
    },
    {
      title: "마작이 되기까지",
      img: "/sample_thumbnail.jpeg",
      contents:
        "마작의 기원에 대해서는 의견이 분분하다. 정화가 명나라 시대 서역으로 항해하는 동안 지루함을 달래기 위해 마작을 발명했다는 설도 있으나 역사적인 근거는 없다. ",
    },
    {
      title: "리치마작의 탄생 ",
      img: "/sample_thumbnail.jpeg",
      contents:
        "마작의 기원에 대해서는 의견이 분분하다. 정화가 명나라 시대 서역으로 항해하는 동안 지루함을 달래기 위해 마작을 발명했다는 설도 있으나 역사적인 근거는 없다. ",
    },
  ];

  return <List data={STORY_DUMMY_DATA} />;
};

export default StoryList;
