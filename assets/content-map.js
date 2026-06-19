const contentMap = {
  sections: [
    {
      id: "home",
      title: "首页",
      content: "欢迎来到站点，体验丰富的内容分区与关键词导航功能",
      tags: ["首页", "导航"],
    },
    {
      id: "guide",
      title: "玩法指南",
      content: "了解如何快速上手，掌握麻将胡牌的基础规则与技巧",
      tags: ["麻将胡了", "指南", "入门"],
    },
    {
      id: "strategies",
      title: "策略专区",
      content: "深度分析多种麻将胡牌策略，助你提高胜率",
      tags: ["麻将胡了", "策略", "进阶"],
    },
    {
      id: "events",
      title: "活动中心",
      content: "查看最新线上与线下活动，参与即有机会赢取奖励",
      tags: ["活动", "奖励"],
    },
    {
      id: "community",
      title: "社区互动",
      content: "与麻将爱好者交流牌局经验，分享胡牌瞬间",
      tags: ["麻将胡了", "社区", "交流"],
    },
    {
      id: "about",
      title: "关于我们",
      content: "了解更多关于本站的信息，包括我们的使命与服务",
      tags: ["关于", "帮助"],
    },
  ],
  siteUrl: "https://cn-ssl-mjhu.com",
  keywords: ["麻将胡了", "麻将技巧", "胡牌攻略", "麻将社区", "麻将活动"],
};

function searchSections(query) {
  const lowerQuery = query.toLowerCase();
  return contentMap.sections.filter((section) => {
    const matchTitle = section.title.toLowerCase().includes(lowerQuery);
    const matchContent = section.content.toLowerCase().includes(lowerQuery);
    const matchTags = section.tags.some((tag) =>
      tag.toLowerCase().includes(lowerQuery)
    );
    return matchTitle || matchContent || matchTags;
  });
}

function getSectionById(id) {
  return contentMap.sections.find((section) => section.id === id);
}

function getAllTags() {
  return contentMap.sections.flatMap((section) => section.tags);
}

function getUniqueTags() {
  return [...new Set(getAllTags())];
}

function getSectionsByTag(tag) {
  const lowerTag = tag.toLowerCase();
  return contentMap.sections.filter((section) =>
    section.tags.some((t) => t.toLowerCase().includes(lowerTag))
  );
}

function buildSiteMap() {
  return contentMap.sections.map((section) => ({
    url: `${contentMap.siteUrl}/${section.id}`,
    title: section.title,
    keywords: section.tags,
  }));
}

function printSectionInfo(sectionId) {
  const section = getSectionById(sectionId);
  if (section) {
    console.log(`分区: ${section.title}`);
    console.log(`内容: ${section.content}`);
    console.log(`关键词: ${section.tags.join(", ")}`);
  } else {
    console.log(`未找到分区: ${sectionId}`);
  }
}

console.log("站点内容地图已加载");
console.log("示例搜索 '麻将胡了':", searchSections("麻将胡了"));
console.log("所有唯一标签:", getUniqueTags());
console.log("站点地图预览:", buildSiteMap().slice(0, 2));