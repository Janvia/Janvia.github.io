/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","48b3c4bdd5a12fd2918806bb015462cf"],["/2019/01/02/Anconda常用命令总结/index.html","0733055b9b992a38f14157bfa8ec67c7"],["/2019/01/02/句型/index.html","f66aba184adbb0b2407425a8282fbbc2"],["/2019/01/02/日语助词/index.html","ba530cd3600fbccc7e85fad6bbc892ad"],["/2019/01/03/on-my-zsh/index.html","b1aafc24ab396e7a8df7912d5c983860"],["/2019/01/04/《当我遇见一个人》摘录/index.html","584b629b032dfac33f7554f42248035d"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","13e45c9185be54b87caac27c964100e7"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","997c062a36ba16cdec12a38cedfb6b71"],["/2019/01/04/经济学笔记/index.html","e4377a537050698ef2ced757266290b1"],["/2019/01/04/语法总结（5-15）/index.html","1243f9d4ac1f7136e0bda724b6e6acb6"],["/2019/01/05/linux常用命令/index.html","676f28d66a7645d72a20c19649d9ad82"],["/2019/01/05/mamba/index.html","f9690c618a0654e371fb416ca9e3e873"],["/2019/01/05/tflite编译/index.html","f9724968372b3251abe2395cc10db18c"],["/2019/01/05/tflite转换/index.html","0749978bb7602f60ef9bc29d93b35801"],["/2019/01/05/torch安装/index.html","ec8b42440915a996584dc6089b2538bd"],["/2019/01/05/vscode/index.html","62ba4067d3f43273d972cf0b69392796"],["/2019/01/06/敬语/index.html","2fa0e074f74329c8dd421bc513f7812e"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","abbab5e8e1e86c3be3048642e703deb2"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","d6fb959e6afad90bda4e0e98990c6ed6"],["/2019/01/07/cuda 手动配置/index.html","392069946bf0620389b81e7a17e8f103"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","3b3f3afe28080e4d5da8889e6d492551"],["/2019/01/07/docker-ldap-mysql/index.html","dcc1c6889704b6b72cf03981b6190f5a"],["/2019/01/07/docker代理/index.html","b671cb8623c95e7a1b54e17ef2e84437"],["/2019/01/07/docker安装/index.html","fa28f78632eb49eb6dfbbc533ea9b664"],["/2019/01/07/docker容器挂载硬盘/index.html","fc1b9a4c5cd38c41a3b63750045c4cfb"],["/2019/01/07/github上传代码/index.html","e38b360553a0f93d9fd0179700acad33"],["/2019/01/07/kaldi 安装/index.html","8ec08b53a24c56680301bb65717363fe"],["/2019/01/07/linux常用工具/index.html","b20a7828574e3c4d8f453d57123dde1a"],["/2019/01/07/opencv/index.html","be528e367b585a1abb767c93a1f79cfc"],["/2019/01/07/ssh 远程连接docker/index.html","465056f2c792d79a49d835bdb50a678c"],["/2019/01/07/导出/index.html","6ea958d96072fafdc90eaa01fa98a788"],["/2019/01/07/换源/index.html","4ea50c19155fa664cc9d8fcf306a9216"],["/2019/01/07/服务器配置LDAP/index.html","fc41ed2fb4627277f926944130707c23"],["/2019/01/09/markdown/index.html","435e2bd1e8469bee2773c47b1f4b6fb5"],["/2019/01/09/opencv图像美化/index.html","00dae3a5d6d9230feab83fa9a72d8fd7"],["/2019/01/11/19单元语法/index.html","f7c453072f602e3f0a779384b1f7d9b4"],["/2019/01/11/20单元语法/index.html","fb831b18388120e5964e29a9f90112b9"],["/2019/01/11/opencv-图片几何变换/index.html","47d7095e90fb67376a2b03bf2b3d1617"],["/2019/01/11/opencv-图片处理及绘图/index.html","a5d40269cb2a51207681dd3486f33571"],["/2019/01/11/wine安装qq/index.html","8fb80bd2a660903e939e11c70a724e51"],["/2019/01/12/tensorflow-可视化/index.html","360620177b7a0d9d871a8cb47aa5cc86"],["/2019/01/12/tensorflow-基础语法/index.html","21f0b0b66eb0c2240795c9eff29f5163"],["/2019/01/13/RNN/index.html","83d78fd5392e2e95ce90153380f55086"],["/2019/01/13/keras实现CNN/index.html","a8fb81b6313a7ecdb3ea7f3f3a33ea25"],["/2019/01/13/卷积神经网络实现/index.html","8c86045f27cff57a82cca50358b94f30"],["/2019/01/13/循环神经网络RNN-写诗/index.html","1418bc24a784def59023ef7a7c9a7a73"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","ca86af1bdaa2a51ac886764c441b27f7"],["/2019/01/14/反向传播/index.html","77c7ae16ff8b5a3107ce4e0f7c46fb32"],["/2019/01/14/图床/index.html","4e8150ccd18f4c6eac5742f7a91773e6"],["/2019/01/14/感知器与激活函数/index.html","a9a4e444a5f7530c261c6ecc36e994c5"],["/2019/01/15/PIL简单应用/index.html","2ddb1bdd6994d0f49463d922505534b6"],["/2019/01/15/卷积神经网络理论/index.html","1fc07cf2a565f7d443959680fad0925d"],["/2019/01/15/图片分类之pca-svc/index.html","0e2cf967f2da9267e811e938fe03db02"],["/2019/01/15/强化学习基础/index.html","85ba6a3fdd7d95b688c4693941d2f98d"],["/2019/01/15/经典神经网络/index.html","5bf187b6b85db50b660397fdbb34d21f"],["/2019/01/16/DQN/index.html","a3245037f0f0df975588ad10102e30c1"],["/2019/01/16/TCP传输图片/index.html","a23b8ab36e81548b0ad879a6cabb7501"],["/2019/01/16/时序差分学习/index.html","b00e18af978a9ea806fa5efd6b17857f"],["/2019/01/16/蒙特卡洛方法/index.html","bccb868596c16ffc7d2502d6fc97ad06"],["/2019/01/17/Double-QDN/index.html","25ef979ea48159b3f880a7bd0b304f9a"],["/2019/01/17/RNN理论/index.html","8ee200841b721d9da72b04ff62b66264"],["/2019/01/17/梯度下降/index.html","28119a26bcf05de13f18e4afd0b94d46"],["/2019/01/18/PG和TD3/index.html","854d4327f46ed0b385c6b20a8fcaedc9"],["/2019/01/20/21单元语法/index.html","98070f7f2726323305c0e930b6cfe982"],["/2019/01/20/GAN理论/index.html","943f5ded5329ce4417d29ba2105b7b68"],["/2019/01/20/PG3和IRL/index.html","bd385a14c0bbe38d1e9369c31a0c5073"],["/2019/01/20/数据集/index.html","f33b8f0d8a0b9e11bc94533c137837b4"],["/2019/01/21/DCGAN/index.html","72010ec58b2305a80569a4ac63085b99"],["/2019/01/21/LSTM/index.html","e1c0eff4e72aab1a561523313e265191"],["/2019/01/21/点击预估/index.html","b77c2b94153fea15bf772a3da46f02fc"],["/2019/01/22/SVD分解/index.html","430bb0e15ce36221a76b895d0b60bd63"],["/2019/01/22/SVM/index.html","17d06542465310409807fbed0dbd124e"],["/2019/01/22/机器学习简介/index.html","615eb4707c3ed587d9ce1ebb251c58fd"],["/2019/01/22/线性回归/index.html","f59e6b80ee8aeeed2d1e0f2e2cac5711"],["/2019/01/22/逻辑回归/index.html","dd90d648279ddcf20e41a1c902c96b55"],["/2019/01/23/numpy/index.html","5a41bb21c45c442029abae0ebdde8845"],["/2019/01/23/决策树与随机森林/index.html","c49f04bf83267a7b7a6fcc428863b2bb"],["/2019/01/23/聚类/index.html","2667ecde0c99afc84801e2593938aef9"],["/2019/01/24/matplotlib/index.html","740f6c628fceedabb9886b91ce192c02"],["/2019/01/25/pandas/index.html","11bafe0354e2af09573ae1ada3a8fefc"],["/2019/01/25/语义分割/index.html","8bf0586c431c1cca8d99576ccc04640e"],["/2019/01/27/22单元语法/index.html","afdb48c27a075343e2094538dfb7fa44"],["/2019/01/27/SVM案例/index.html","c38c6cfd96e3325686662da35a22bd5f"],["/2019/01/28/requests库及爬虫案例/index.html","d9b1a1a2ee9285d2192be87759005e85"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","110b3e1683a9f57ed25695b3ed7ae625"],["/2019/01/28/异常/index.html","b303b36e5ad18eeb36e0c6e83478f38d"],["/2019/01/28/描述器和装饰器/index.html","7b8a5178bfe4f18c7a96e0b210482e5c"],["/2019/01/28/文件/index.html","66a64f51d6a8a2c538b6dcac12606743"],["/2019/01/28/正则/index.html","c5e8fbab20a3683c092077794a5dc776"],["/2019/01/29/函数基础和函数参数/index.html","3c51b256d7e6b3d69624510a2f28cded"],["/2019/01/29/多继承和魔方方法/index.html","f4a701eef859e4195e5ea991f2a0b8f6"],["/2019/01/29/类定义、属性和继承/index.html","f805ed0dad7a238909e1804266a34b8e"],["/2019/02/27/23单元/index.html","c037088b8a8a1645b598b1afa7b743b3"],["/2019/03/12/hexo加速/index.html","0885b11c1349963d9ded49e0e87ea62f"],["/2019/03/12/hexo系统重装恢复/index.html","dfb5b821abcc690b66b3d148f4f22a03"],["/2019/03/13/24单元/index.html","02bd9bb1b99b6ca8111870b3afb427ae"],["/2019/03/19/25单元/index.html","ef825ea4ff171fe0796b9071c6866698"],["/2019/03/26/26单元/index.html","6899dbc0d31e7a8436851d1d38cf37ea"],["/2019/04/14/27单元/index.html","7f5620d37c192f3ad24577cf0c77225e"],["/2019/05/01/28单元/index.html","b3bf7d07f19f7000bfae429789938974"],["/2019/05/02/29单元/index.html","f9902e2102c9aa3fb5fc6c519cf2fe79"],["/2019/05/12/30单元/index.html","9b33fc714d95d6f5dd6730aeaadec7ae"],["/2019/06/03/jni/index.html","04848a01fa4f559e90321b6e1994a0d6"],["/2019/06/07/JNA/index.html","15853fdad2eb7f29c3d3887a23c50fa1"],["/2022/08/07/R配置jupyter/index.html","10d1ba5131f401ebfff02ac4c9cd2cdf"],["/2022/08/18/FFmpeg常用命令/index.html","4d11e59fa3d23059ec9a7afa33a68bf0"],["/2022/08/18/linux系统代理/index.html","047c0d7fc0b2968fb9e69242e088ad64"],["/2022/08/18/matplotlib补充/index.html","6f409073c89ece5f2b3adef2bff85d04"],["/2022/08/18/常用命令/index.html","6d585a982f8f5b9e6a49c6da250b09df"],["/2022/08/20/rust 多平台demo/index.html","b64657630403443336c918728683d4ae"],["/2022/08/20/sacred/index.html","328a56611931b46721b22b1dc8c55fb9"],["/2022/08/20/wsl/index.html","04816a6f1540c532f43f384c77f0ce90"],["/2022/08/20/双系统安装/index.html","034885a4d05010c02484ecbb88842f86"],["/2024/11/08/source/index.html","3d50b7bed18bea591807ae0a77e0be5f"],["/archives/2018/12/index.html","e25c29bb017716724591e898a28e2db9"],["/archives/2018/index.html","cbdd47c4947897458eb4d94d3a9f622f"],["/archives/2019/01/index.html","ee0868b45041a434907e98ad012f92b9"],["/archives/2019/01/page/10/index.html","5d2cb881b95183dfa63858b80ea8ce02"],["/archives/2019/01/page/2/index.html","8779429d633aa7e54208cdf513d4e05e"],["/archives/2019/01/page/3/index.html","2a44eebeb8e219a3057806b7f15fb52a"],["/archives/2019/01/page/4/index.html","b2307236d08f0b3b8d3ad0cc87e3e314"],["/archives/2019/01/page/5/index.html","f64e93da1ff4c231ca93bfa33eb51c7a"],["/archives/2019/01/page/6/index.html","ce59b5447966face1d1ed39a5d0810e8"],["/archives/2019/01/page/7/index.html","9f98107bc54f872e2e7a73f1000e6f68"],["/archives/2019/01/page/8/index.html","727d5340af651bcf7d06f192dbebe151"],["/archives/2019/01/page/9/index.html","1a1acdd76614531452e0e606beb48049"],["/archives/2019/02/index.html","9ae5918cc01a787a9ebf075dc6da8e57"],["/archives/2019/03/index.html","9fcd2f72c24673eba18ce54b66421133"],["/archives/2019/04/index.html","6d4500a05cc4f384da76c599dbf21997"],["/archives/2019/05/index.html","3b4204d81190317f156f0d78668d3925"],["/archives/2019/06/index.html","166af306a73d77194737a4316a788496"],["/archives/2019/index.html","c388d28862e4e8ac75f3f088e9451f97"],["/archives/2019/page/10/index.html","d0b4ed6aaee0f8fba2b50121aacfb0e0"],["/archives/2019/page/11/index.html","17ab2c08df78cab98fc97745a7a3726b"],["/archives/2019/page/2/index.html","547a30e551af741a811534b53b159e40"],["/archives/2019/page/3/index.html","bedbda742309d78a1737e3485d3cf5e9"],["/archives/2019/page/4/index.html","a90774111df84d896a9934d3944b6b7b"],["/archives/2019/page/5/index.html","c5f3693c27bca6d183de9f6f4c92298e"],["/archives/2019/page/6/index.html","95e4fb927b9bf1ed9785bc4752925784"],["/archives/2019/page/7/index.html","cec841701a8614b01ff1682ba287ba13"],["/archives/2019/page/8/index.html","b49bff5f4f46832b57bdebbcb9468ced"],["/archives/2019/page/9/index.html","d158362a81963a18110d8dd86c0d517b"],["/archives/2022/08/index.html","bc03cad87a4e00aaeeccc2de9d716e3e"],["/archives/2022/index.html","dbb3320f6218e6e561cab58f99585e86"],["/archives/2024/11/index.html","bccc25acd04e451e9b7399c8fa06ae17"],["/archives/2024/index.html","4e59f026790ccbc97c1a822fc34f6477"],["/archives/index.html","6391123ec9a135a3fc58d09412618d41"],["/archives/page/10/index.html","c48a4f7ab5d4d790fb357d4a11fe87ee"],["/archives/page/11/index.html","8d634f142badaa66a0ab6101755eb96e"],["/archives/page/12/index.html","8d120079b08e3f4d4cc39f41f5465c56"],["/archives/page/2/index.html","7702d63634ffaf94cd54946f4da4fc70"],["/archives/page/3/index.html","16d6320e39985c9e77642ddc71985675"],["/archives/page/4/index.html","10a59bdedf8327f41226d2318ff4622d"],["/archives/page/5/index.html","d82edee70d0ba690d23434173ad30b0d"],["/archives/page/6/index.html","82bfe315a0a1b619f081ae76704e04ff"],["/archives/page/7/index.html","c11467018daa0d0ab349f4364bf6fc62"],["/archives/page/8/index.html","2358e752afbe0bf8a33f75f8e4b71f4a"],["/archives/page/9/index.html","583643544d3941ec17a403c6c396dba8"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","a095dacc8ff1db7c308eb92f84853fc6"],["/categories/dxz/index.html","f4b5276e801cb0fc0fda988fac2fe1d5"],["/categories/index.html","e2d417348801d165ccaf04305beefd52"],["/categories/linux/index.html","6caa0cf84e4f88ba28f68fabaa6cefda"],["/categories/python/index.html","a57d0e7f15daa9ad707d730730de9aa5"],["/categories/tensorflow/index.html","71c73461fb88e903e88a954d740dbd79"],["/categories/图片分类/index.html","94a8eecd0ea2fdb013377bacd721d0cb"],["/categories/工具/index.html","8978510e2d4384733446e898679265bf"],["/categories/工具/page/2/index.html","e78e7431abd19cb0dca19e60fba7e593"],["/categories/强化学习/index.html","f5adad9b871c2958d3f32ce89a44b98d"],["/categories/数据集/index.html","280b2cb1a9495016f63ddbfd4a6f4894"],["/categories/日语/index.html","d4ad4b5238701207d1350d676993d25d"],["/categories/日语/page/2/index.html","99f9df5253aa9368c2694ab5d242a790"],["/categories/机器学习/index.html","a8513c5688f8eed64529e7b733d8d831"],["/categories/深度学习/index.html","1d0f5a390bb6ce5d3597fb378cd4c0e6"],["/categories/深度学习/page/2/index.html","c916f8ae147d1217bd867028e5977af5"],["/categories/深度学习环境配置/index.html","d217d6fc65e388a93102ce8010437ac2"],["/categories/深度学习移植/index.html","279ec1b04c3fc040ada17b0dd68f1049"],["/categories/计算机视觉/index.html","6359c685b201615ae2120a616d943f05"],["/categories/读书笔记/index.html","7521cf93e6f8813c04cbae5f590e6acb"],["/css/main.css","a1e416e07f291388df06f42746ffa079"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8cdaf957fbcdc93dc792d34afc1bdab4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","4fc5b6a754a2579b428fc46f5a1d6a49"],["/page/11/index.html","6a6538b7b7e90bec003a085b5f0eda02"],["/page/12/index.html","d8722280c3496d8e60c37e6857105910"],["/page/2/index.html","a30aecc8a7f43159610a742c3d12e3bc"],["/page/3/index.html","3b7a43545b4cde4b5dac6ade75cf7545"],["/page/4/index.html","227624ca397ba08d4749622cab58c8a0"],["/page/5/index.html","cb3ceb4884d05edd830606d92a96d01c"],["/page/6/index.html","4d08bc277beb3be94c4dc88bdf732239"],["/page/7/index.html","a2aeda97f7b22f68c92e4ccbf37ec33e"],["/page/8/index.html","58134667d878ccf310b9739362f6f635"],["/page/9/index.html","5fcd6e2a57339f40c9510435ec888277"],["/sw-register.js","08a502971df508ab03ba147328a9d524"],["/tags/AlexNet/index.html","fba66098729f4895074df28cd3c6612f"],["/tags/CNN/index.html","bf78eb781fd1dd3fb3745ebf9fb93959"],["/tags/DCGAN/index.html","2c8937479af9d5981388101cd3e0adea"],["/tags/DDPG/index.html","24c51ad68aa912fdf77e193e6a1a352b"],["/tags/DDQN/index.html","bf919903e2b9fe352edd2d7899baa65e"],["/tags/DQN/index.html","0dda44fd2c53f2a2c42ae39a9d5e32e0"],["/tags/GAN/index.html","252724c0ae2fd405ba60b868cb474afc"],["/tags/IRL/index.html","bbfdd1dbaaf9374863bfd01e9c3ccece"],["/tags/LSTM/index.html","abd1f97a9e6aa8671d0fd02503b3a934"],["/tags/LeNet/index.html","20eb43503402f362bf6da5fe2ba3a740"],["/tags/MC/index.html","e43b26cfc9924bc5eedb19865b767f77"],["/tags/PCA/index.html","c7d52f490c49834e893b4604e24e0dec"],["/tags/PG/index.html","512102467e2ed3e0518cb0c0220347d7"],["/tags/PG3/index.html","315d96601f0e0769560907a46071c4ba"],["/tags/PIL/index.html","7bf921e6a5806d7b2b3de988b2f95db1"],["/tags/R/index.html","cb3b459fb3333bd5383bb33e5e860491"],["/tags/RNASeq数据下载处理全流程/index.html","3edeacfd35148a5ff2e47279df8019f1"],["/tags/RNN/index.html","2a43bd4182e901e3726244c0ff3ffd3b"],["/tags/SVC/index.html","e9205719abc3f4fba61dabf6793f1856"],["/tags/SVD/index.html","94bee24544171d1d6b6aa3facfd7db5f"],["/tags/SVM/index.html","a84679a93ed6102688acbbf757e9aa6a"],["/tags/TCP/index.html","24b46f3916f3dcf2728e836769d963c1"],["/tags/TD/index.html","26842383e6711d0535098ff916c4d147"],["/tags/TD3/index.html","dd9a006836572b79614316227a71912f"],["/tags/VGG/index.html","be79c17449139b765ccd3ee835b68fc9"],["/tags/amd配置/index.html","ea22937b0c36bb80118e1506094c22cd"],["/tags/anconda/index.html","aacf747455869476b80ce8cca6d35ce1"],["/tags/conda常用命令/index.html","e36a4d965d733eaa0631cb832f1e8e63"],["/tags/cuda配置/index.html","bcd706072911d32ad23ea57901ebbf8b"],["/tags/docker-ldap-mysql-arm64/index.html","6420f048c4f0f2d43756edc806d50287"],["/tags/docker-ldap-mysql/index.html","b0f8ccea64b7bd2e8ea535606d47628e"],["/tags/docker代理/index.html","ed7fde4eac47ded6ff0d204539b51ebb"],["/tags/docker安装/index.html","637fafc546514ab0c2012bc1802dce5f"],["/tags/docker容器挂载硬盘/index.html","7885dd4da013446451421600c1fbc820"],["/tags/ffmpeg/index.html","d18930337b77e7d8b90a5dcedc7c847f"],["/tags/github上传代码/index.html","f6b7ab1b5583fa9be3760a1baffe4491"],["/tags/hexo/index.html","5646498fe19291f4aa02a6d5d23d0ba0"],["/tags/index.html","f62f9527524b7493e35522a627ed004b"],["/tags/java调用C/index.html","c712503f260f2ccf456526dab124e131"],["/tags/kaldi/index.html","088043ff2c36af5e05b0263bbb851bb5"],["/tags/linux命令/index.html","5a2d217db11d8abfba13b8f4cd3b4eb0"],["/tags/mamba/index.html","1d51ff7c931b645d0b193d7cc56f3536"],["/tags/markdown/index.html","6e26d0e44ae932da327b754a465eb86f"],["/tags/matplotlib/index.html","d5f03801fa4c2c5f2e045b201f253d53"],["/tags/numpy/index.html","9c7cb813e14a8cddcb99e21de4320358"],["/tags/opencv/index.html","cdb6580fce0c2b7690f32fd3e800045d"],["/tags/pandas/index.html","b5845a485533619d499d7f2b6b6491e8"],["/tags/qq/index.html","6d864c7c0d9a337177870fad37edfd89"],["/tags/requests库/index.html","b85029f4e086fb8ecf7716514fd5060f"],["/tags/rust-多平台demo/index.html","718c8bde2ca529be5d0e344c95980fe1"],["/tags/sacred/index.html","97ef5b6fec2635290fcc704d2080e02f"],["/tags/ssh-远程连接docker/index.html","228b03f3c394eecc82681277150cd850"],["/tags/tflite编译/index.html","e9a23ca4e8fdf0e3d575c02c52b173a8"],["/tags/tflite转换/index.html","de34d6f6d377c0b1c26349df68fbe694"],["/tags/torch和apex安装/index.html","3e44a731eab9ee12f753d997244703b2"],["/tags/vscode/index.html","15466c320f6853f37dbab784860b2253"],["/tags/wsl/index.html","6b71ef903954b588013680fcb40bf3ef"],["/tags/zsh/index.html","3c578a2c7a2b76a21a35dd5f0c62dd3f"],["/tags/代理/index.html","3a8e2d1425cdca164b8be29ee1c6de55"],["/tags/决策树/index.html","2c8c71e9d55da02f5d41df53eb5a7e45"],["/tags/函数/index.html","ee644ed044cd9fc8575827aee51e8a02"],["/tags/列表推导式/index.html","3a3ccd6327ff05455e40e186ac8f1fa1"],["/tags/助词/index.html","e0092ee6827649bf2503a413dd90132b"],["/tags/包/index.html","acfb418264ebb62e4e5abfa93202b76f"],["/tags/卷积神经网络/index.html","92a514c7660448681ace04aa36ea64a9"],["/tags/双系统安装/index.html","bfba8e4af95d2fc212ae5b9e9e2e7990"],["/tags/反向传播/index.html","19375f0df2da4b22fdcad9de98b419dc"],["/tags/句型/index.html","bd482149329bc4b28c495470bb4f35c5"],["/tags/可视化/index.html","1fc0593fcc36b31dcc88a172ac0bf2cc"],["/tags/哲学/index.html","852911df5476b8f7cd03c7bc5f9e2c3e"],["/tags/图像美化/index.html","6dfe19ffed245dc6c1122a7931a02d72"],["/tags/图床/index.html","0a8623fa2646ed00f21493e5ab2a07cd"],["/tags/多继承/index.html","8ed3083c685e01e2f3271f17429226dc"],["/tags/工具/index.html","1d38499b3d5a56f061c1e065e5cc492b"],["/tags/异常/index.html","0b4aaede97f0e698953d9cf54ca8abc7"],["/tags/强化学习/index.html","6bfc2bd153b31431293e867320221394"],["/tags/心理学/index.html","3e741b222f069ac08b1857b8fcaf27fa"],["/tags/感知器/index.html","51454587dca769f5a9ff154b375fbb9a"],["/tags/换源/index.html","b6e672455c40d8712619dc6832056132"],["/tags/描述器/index.html","f3967d3a1bd7240c216293e7a67c0a3e"],["/tags/敬语/index.html","69e3dd3dd15d8ca3b0df418001ee7872"],["/tags/数据集/index.html","e951a3e4aa84084db3cf4fd9f5f5e77a"],["/tags/文件/index.html","540629f425d10cbab919b78c6fe65cba"],["/tags/服务器配置LDAP/index.html","e1fd8daddcdbc5034b30bc091c4536ad"],["/tags/机器学习/index.html","c0ebe75b00c7a870b231de4c493399ab"],["/tags/梯度下降/index.html","cbf4e8b326e8ae4d5a74ead76965cc2c"],["/tags/模块/index.html","dda879a09a1e971b3e6cd15af906acd4"],["/tags/正则/index.html","97f4bdccdc7fbd83321318f9195b745e"],["/tags/激活函数/index.html","3cdf4e36fb9772b2f9757e72812056a3"],["/tags/点击预估/index.html","76b93a1e3411cdde139b38a02191dd9c"],["/tags/爬虫/index.html","d37b04fde7cd2c9d652ebcd73a322025"],["/tags/生成器/index.html","afdbaa632ab74fd0236a4bc4ef41d195"],["/tags/类/index.html","b3656693d6ed2dcbf4750015e8a80a7f"],["/tags/线性回归/index.html","83dacdda4075ea7e426bc9699885c8d2"],["/tags/经济学/index.html","5fc805aefc714797140850b58c52d497"],["/tags/聚类/index.html","1ab8f3770757a854587289887098a2ca"],["/tags/装饰器/index.html","e943ef70005a28bd8197812d193ea7d9"],["/tags/词型变换/index.html","c9d7a56366895219ed1d38955410aca2"],["/tags/语义分割/index.html","613d39fc0a3ed0786028a6c17b944120"],["/tags/语法/index.html","48b832383f00f25cb036f3112b0adf5d"],["/tags/语法/page/2/index.html","c47a491da0101c5a1782454e45085316"],["/tags/迭代器/index.html","5424b35e961d0bc274bc7ba2fff9cec9"],["/tags/逻辑回归/index.html","dd07eaa14ec3edaba91109242f3507c6"],["/tags/随机森林/index.html","e41addff832aac9ec7d106c6bc59957b"],["/tags/魔方方法/index.html","14735f18dc6b411400743eb9135dc7a5"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
