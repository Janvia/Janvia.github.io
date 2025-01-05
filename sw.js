/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","f93bc9def76edafd59f03107e6f08209"],["/2019/01/02/Anconda常用命令总结/index.html","fd92875543e590ded7a0646faef95680"],["/2019/01/02/句型/index.html","158839bb57903cae3f17c1350adde0a0"],["/2019/01/02/日语助词/index.html","aedf47949ebb201b08384ea03285f665"],["/2019/01/03/on-my-zsh/index.html","73233e2e6e2ceb90999e36a50ff3c481"],["/2019/01/04/《当我遇见一个人》摘录/index.html","70922d2c2ab419ebfbfd48e608e2eb76"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","b176b5d64358d5b619902deed5b5aaf3"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","3c3734c44cd3465c099569b1b27e8880"],["/2019/01/04/经济学笔记/index.html","218bea61f1ada43c84bd0dcc44169c85"],["/2019/01/04/语法总结（5-15）/index.html","25124f62758452f384d8df8a140ecbf2"],["/2019/01/05/linux常用命令/index.html","6fd4fc9410b029c86edcc9bb280a9f61"],["/2019/01/05/mamba/index.html","ad1448b8bd303a1428a618dcb9d349a5"],["/2019/01/05/tflite编译/index.html","93bcab60743bc3b4c41f498ab86f3fb0"],["/2019/01/05/tflite转换/index.html","0247ed9a9ebf3959df2a31c400f800c1"],["/2019/01/05/torch安装/index.html","1907654a660840252f208144e102e7f8"],["/2019/01/05/vscode/index.html","2f4e3104a0fc8e4c8315b1f1df0b237c"],["/2019/01/06/敬语/index.html","239f2ec40853e2b1e3c74f252d4634e9"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","d3c55f567f995e861c8936a79860c3fe"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","7602d571ccb30c40e592e309a71c75d9"],["/2019/01/07/cuda 手动配置/index.html","5ebc9fe492fceacdccfd0312e4aea91b"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","98a5b82109b86108d6f7cf9f437c95aa"],["/2019/01/07/docker-ldap-mysql/index.html","79abf3aa30af6e9e759bb5af79993c22"],["/2019/01/07/docker代理/index.html","cadc5611ddad440b68169df06aa89c02"],["/2019/01/07/docker安装/index.html","05fa0ce185a5808cfb23aff36ceedecb"],["/2019/01/07/docker容器挂载硬盘/index.html","af083a6bbcb919bd92bcc716b573cac3"],["/2019/01/07/github上传代码/index.html","ed203ea0ceead4d75ed75a41c3842be7"],["/2019/01/07/jupyter配置vpn/index.html","8e594f84f775f0e617e05fec423b2ba3"],["/2019/01/07/kaldi 安装/index.html","fe43ee3e4a4d9189c39ca611855d4dd7"],["/2019/01/07/linux常用工具/index.html","cdfe3bd8157a6dd560aa5bdd370125af"],["/2019/01/07/opencv/index.html","51a4aa21549d3ba4b4076af09fbc06cb"],["/2019/01/07/ssh 远程连接docker/index.html","b7aa5afadc03ef2b36827db193e2258c"],["/2019/01/07/导出/index.html","0dd8bc4149eda5ad405a655d5ea49acc"],["/2019/01/07/换源/index.html","61d50b8e81996cb37cf5171e92db62a9"],["/2019/01/07/服务器配置LDAP/index.html","b3550da0e035a04d8f4c55f6036028fd"],["/2019/01/09/markdown/index.html","aa7af03c466cb416f85f528c201ea81b"],["/2019/01/09/opencv图像美化/index.html","3525e2df84dbdad7b481986e5f755d99"],["/2019/01/11/19单元语法/index.html","1cbc7e87da0bb2809f14f18e9c2e6624"],["/2019/01/11/20单元语法/index.html","78e8c15cd91ce9bef9b0d7a87bd50fbf"],["/2019/01/11/opencv-图片几何变换/index.html","ce1643e858a932c8530fc5459bb75b7a"],["/2019/01/11/opencv-图片处理及绘图/index.html","85a2956989589c07d2f686cd0eba394e"],["/2019/01/11/wine安装qq/index.html","67be55799cb8b047cd4eab874fc23ba9"],["/2019/01/12/tensorflow-可视化/index.html","32de33905c56e8ca3257cfe191447ef8"],["/2019/01/12/tensorflow-基础语法/index.html","6c2d38ae7e4b28dcfc975a4649a10a15"],["/2019/01/13/RNN/index.html","91c8d5eeaf04ef039e764f906f8e391b"],["/2019/01/13/keras实现CNN/index.html","f0eda60d61ded4ed13b91b923ada7fb2"],["/2019/01/13/卷积神经网络实现/index.html","b49517cdc48f1fe2167255646f57f2f9"],["/2019/01/13/循环神经网络RNN-写诗/index.html","82244b322baf79c4cd50b25ff7886654"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","aa7c32278060d015728901c35c471ab2"],["/2019/01/14/反向传播/index.html","bad3973483d78fe4099c42313652359b"],["/2019/01/14/图床/index.html","853f8641ebff1009f321cba063a87a76"],["/2019/01/14/感知器与激活函数/index.html","38fdf757adf5f6fa4a9cc13c332782b2"],["/2019/01/15/PIL简单应用/index.html","21d815b07df7f948dadb25a7307fd9f6"],["/2019/01/15/卷积神经网络理论/index.html","51ae27f1554df26aa45e54b47fa20c25"],["/2019/01/15/图片分类之pca-svc/index.html","7fb539e608506565a8bb86ddd7684bd2"],["/2019/01/15/强化学习基础/index.html","c5e6292d5f63ad643f7c8a086e45b586"],["/2019/01/15/经典神经网络/index.html","d80a3b97f2dbab2cafef9206db2e2f05"],["/2019/01/16/DQN/index.html","876bc25883b0eca28d049d8c9db6e0d6"],["/2019/01/16/TCP传输图片/index.html","3216a10d320847210819ed9edab1f353"],["/2019/01/16/时序差分学习/index.html","b1606767ca14fbe4d4d76c780e3d0591"],["/2019/01/16/蒙特卡洛方法/index.html","6de0cfdc97286498eaec592b5137a315"],["/2019/01/17/Double-QDN/index.html","7f7c74f3921e2e29315e7dd74150bdc6"],["/2019/01/17/RNN理论/index.html","6b6a5713b016ed07cfc2b56bcb935954"],["/2019/01/17/梯度下降/index.html","60acab5edc63765e1153fe426d8a9376"],["/2019/01/18/PG和TD3/index.html","421717d0c40e28218cfeeecd7f773bfc"],["/2019/01/20/21单元语法/index.html","fc0d4604173c196e118b7493b208b7eb"],["/2019/01/20/GAN理论/index.html","ee1c973088e21e3621376642b852fda9"],["/2019/01/20/PG3和IRL/index.html","1940f258a18816c78357b16866a9a8e6"],["/2019/01/20/数据集/index.html","6d17fbc3267478d51e12aa0612db2b2c"],["/2019/01/21/DCGAN/index.html","2b3d613d57f0774334ae59402e914d39"],["/2019/01/21/LSTM/index.html","8a20eb299470e707d777b6258345bf74"],["/2019/01/21/点击预估/index.html","70b643eefa8d08d2deb82787118866fd"],["/2019/01/22/SVD分解/index.html","5d465b3a8ce9eb4ca66e7971789f5c4d"],["/2019/01/22/SVM/index.html","1552daed6bf61caa0eff26c488f13525"],["/2019/01/22/机器学习简介/index.html","71f85237ce4b0542aa7159cad7a22175"],["/2019/01/22/线性回归/index.html","997abc7a9015a8b642c04fad5ef8c4d4"],["/2019/01/22/逻辑回归/index.html","6daf69d2c29b051fd62b8fa68d0b7d86"],["/2019/01/23/numpy/index.html","f1f79c1df2450e32c2579982757d0e24"],["/2019/01/23/决策树与随机森林/index.html","6aeb910951b3e4a220b946793ae1ac81"],["/2019/01/23/聚类/index.html","dec8a545ee63c50cef2471dc40aba534"],["/2019/01/24/matplotlib/index.html","71016959985254e3ff8c3b25d5b95e27"],["/2019/01/25/pandas/index.html","3f1dff7752d0db694dbb0a46798bfc94"],["/2019/01/25/语义分割/index.html","b6ca8ec34f941c29fc8e4210e9232578"],["/2019/01/27/22单元语法/index.html","5035a3e26420c7779acc1c23b54b7fcd"],["/2019/01/27/SVM案例/index.html","cfeed6d88fb4e21ce43465c70a32fe1d"],["/2019/01/28/requests库及爬虫案例/index.html","995bbde0135e624ec2bbee4ccc9592a9"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","242fbc3512461886d807d60364bd87dc"],["/2019/01/28/异常/index.html","fc52799a5b4ac7396520f4747778f3ab"],["/2019/01/28/描述器和装饰器/index.html","d3fcde9d68bdf4ff00f1b27f91410397"],["/2019/01/28/文件/index.html","8fada5bced82c52054715eb78cf2cb2e"],["/2019/01/28/正则/index.html","9105612787398a419b556a8b1748b5e7"],["/2019/01/29/函数基础和函数参数/index.html","794051a39472dfb648fe6133c3348c20"],["/2019/01/29/多继承和魔方方法/index.html","c7ec8185ae9047b0d15194be804ce57e"],["/2019/01/29/类定义、属性和继承/index.html","ab495dd57019c5ce85719becffcf954f"],["/2019/02/27/23单元/index.html","dead0807eced20d7c7c1bddb927aa9f0"],["/2019/03/12/hexo加速/index.html","8f109db757bdd8d12fb52d06f50190aa"],["/2019/03/12/hexo系统重装恢复/index.html","74c1bf8379393279e8064bd00232cdc8"],["/2019/03/13/24单元/index.html","86f31a4068046249f0ea66ced7c596fd"],["/2019/03/19/25单元/index.html","f155b0fd0ac56d7d5b94bbd9bebdd063"],["/2019/03/26/26单元/index.html","6f4e412d8f2276ea89e8f29d51a36dd3"],["/2019/04/14/27单元/index.html","bbf6871fd665aad7886a8b0b479b91bd"],["/2019/05/01/28单元/index.html","22db9a2e404ea2c9d78db48984b50015"],["/2019/05/02/29单元/index.html","ad049bea5c4fe036aee27a73ac9bbfcf"],["/2019/05/12/30单元/index.html","9b9e40e6ad85b3e0a3ee99e2f6db8f27"],["/2019/06/03/jni/index.html","1a05ae0d9364c44c469f2b4a7a8d58a2"],["/2019/06/07/JNA/index.html","7c59a534266ca816f1cf31bc0f73664c"],["/2022/08/07/R配置jupyter/index.html","4bceff64e2ea8f3d75108fc87263036b"],["/2022/08/18/FFmpeg常用命令/index.html","2c42c7f337e444a33edd9387a99b92ea"],["/2022/08/18/linux系统代理/index.html","ca725f3a827e14adc9a2012538975105"],["/2022/08/18/matplotlib补充/index.html","05420166a7a0652df2d3bfbd2ab3c090"],["/2022/08/18/常用命令/index.html","eed5a1b2c3b471034afdb52745579a0f"],["/2022/08/20/rust 多平台demo/index.html","c592ccd8181d58bc9c6f640d25e249ef"],["/2022/08/20/sacred/index.html","6aa55fb3e9269b3faab5d136d48fd23b"],["/2022/08/20/wsl/index.html","50cfdbd8550849d4b3fa7723ea4dbd94"],["/2022/08/20/双系统安装/index.html","479d2ebf1748f17d2861e92d6b108fea"],["/2024/11/08/source/index.html","7556ad7010889490cd30b87c95efaa17"],["/archives/2018/12/index.html","8f2b57a95c71d40928399cc831bcbff4"],["/archives/2018/index.html","56c53e324c2df291ee2bd9d08b623750"],["/archives/2019/01/index.html","9811287a5f3b6e1d911090a40a980060"],["/archives/2019/01/page/10/index.html","19610e43d2a2785af84909aabacfd5ec"],["/archives/2019/01/page/2/index.html","01a11fac1fe45b8e99c461174ba10785"],["/archives/2019/01/page/3/index.html","14e3012e076ad6ef1f1984272d90a17e"],["/archives/2019/01/page/4/index.html","a45c164bc6bc9009366251748d630f16"],["/archives/2019/01/page/5/index.html","9f415211bd75bb398479bf8afcea31c6"],["/archives/2019/01/page/6/index.html","7510e51bfa8c251d1dfa5ccc21e6083d"],["/archives/2019/01/page/7/index.html","4481d692c9f6777af83a9d6a320be773"],["/archives/2019/01/page/8/index.html","68da3a8a9655289c41e496c66165d4f9"],["/archives/2019/01/page/9/index.html","adf2705e7865970ca1318db63cbf6aac"],["/archives/2019/02/index.html","92276cab0f6ef13a4f1c7e5e5116703a"],["/archives/2019/03/index.html","a38ec8d0822df1c619173e7ce3f7f816"],["/archives/2019/04/index.html","50ce4ea103f1dd6829cd57538d31fce5"],["/archives/2019/05/index.html","f8d608d64f9e42ceff58ff8dcfd29834"],["/archives/2019/06/index.html","7f53a81f1d8ff093db634b1253a66109"],["/archives/2019/index.html","6676ee7e1f9a9b722defd2bad20b6a43"],["/archives/2019/page/10/index.html","2ff69a6c1f6c65b95311d35478c77932"],["/archives/2019/page/11/index.html","fdc3327fceb1aff5c3e6214a83418cba"],["/archives/2019/page/2/index.html","77fddf59ebb22cafadbaa892149918b6"],["/archives/2019/page/3/index.html","e72a82a6bb1758c3b9c4c7334bfc629c"],["/archives/2019/page/4/index.html","51662a0b2595772db37d5d5e5c89360e"],["/archives/2019/page/5/index.html","48f5e2470a7f8edb4e17e2c1cfc40b6b"],["/archives/2019/page/6/index.html","a8b27c9c5f9ffbf1379297f390a22a51"],["/archives/2019/page/7/index.html","b9b3368c83cddf7e37b371262672e58f"],["/archives/2019/page/8/index.html","5f6843c4b26ccf9ea0ba122356ce06c7"],["/archives/2019/page/9/index.html","b3756e901cd99e49810afe1def13fdab"],["/archives/2022/08/index.html","0fdfa30608927ab8651b00471d7d448e"],["/archives/2022/index.html","8200b29d3f70c7f682ad40f21a9f6b08"],["/archives/2024/11/index.html","27d69712f255e32f416f0d10d683b2a9"],["/archives/2024/index.html","2faa1752375f2f24d4f0a204812d382e"],["/archives/index.html","5dc76a08b95af23cedb39e30dfb89564"],["/archives/page/10/index.html","853335db5911ce8bd719fe9562e69914"],["/archives/page/11/index.html","91582fe647d343383fcde16b26ec4caf"],["/archives/page/12/index.html","c2c0ffb505525d6ab064802aa5db30ea"],["/archives/page/2/index.html","6d25c3d48e3f5ad5c189c83b4786b727"],["/archives/page/3/index.html","ba35a2b7ceee06d7bc925027b620a88f"],["/archives/page/4/index.html","8f621dc90c9cc1c41040802abb8af004"],["/archives/page/5/index.html","276565e2b219f35320049e8818b12a79"],["/archives/page/6/index.html","d3c38ab851d2a4e735a7082d22e04823"],["/archives/page/7/index.html","3c58ed79ab82e7fc7341b42519fca88a"],["/archives/page/8/index.html","4244531fcf226afa8b99ea6bcdf3150f"],["/archives/page/9/index.html","b212b53a7464eea2a3e50ba602491003"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","2a9ee7c866c28e502f801e71488d6f9f"],["/categories/dxz/index.html","ebb2049ca149bf7d715278672e4b7877"],["/categories/index.html","a443ea7202643ee55626b40205a4a285"],["/categories/linux/index.html","20bb2ac0c0e814abded7c0baa571c707"],["/categories/python/index.html","0127caf494c7b208627b0f4a2923f5a9"],["/categories/tensorflow/index.html","12a93294c3b6f4ca86b52ec250a11267"],["/categories/图片分类/index.html","e1e63c9f21ce63808128bc579f8177ab"],["/categories/工具/index.html","830511f4aa58c99a60fd2fcda629506e"],["/categories/工具/page/2/index.html","28d189decfa7d7fc01b8c2221f4e24ce"],["/categories/强化学习/index.html","d2ba84b3e14641b2edf1563c13467213"],["/categories/数据集/index.html","aea46187823589b6a97bf847c3a7af5f"],["/categories/日语/index.html","46b457a018608219d28fb7e1e514677b"],["/categories/日语/page/2/index.html","848d6f0b60319de85a36057465020485"],["/categories/机器学习/index.html","22b8d8d2b1880638a19e59ccf5b01977"],["/categories/深度学习/index.html","0a60cf4bc47a4bebc4f1b0cdd4a0ef84"],["/categories/深度学习/page/2/index.html","4ff41d366ecdba44138599969088f406"],["/categories/深度学习环境配置/index.html","0c5f696e0f0b878ca2e5172ce0e2c051"],["/categories/深度学习移植/index.html","ac9a50415c0d914802d1cba43d063dc4"],["/categories/计算机视觉/index.html","ccb29c7b16457f2fcda278bfef8ea5ce"],["/categories/读书笔记/index.html","61ee3ad4cd89a34ca8429f478317fcc6"],["/css/main.css","af13188836ba31fc096fc33aee2f2b11"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e664198e2f0f582d4a510f26ec762655"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","fbf1076c0ed25feb8f806f02594ca1c0"],["/page/11/index.html","ecede5f9693433787effbdfff4e9e207"],["/page/12/index.html","1a1108651428e6b0fcf648bfe8171446"],["/page/2/index.html","539d5cb2c580e604ad565a8ea236e225"],["/page/3/index.html","e2eebb79053b2055e64d2e144e538e0e"],["/page/4/index.html","0587e3fdf607c036ea4692840cf45655"],["/page/5/index.html","998b5e011f73e3624ca82e26d17fa31a"],["/page/6/index.html","0b4a1fc14849c08c6b483d604cb31f68"],["/page/7/index.html","132370a4d90f5f59ed72a1d314371f7b"],["/page/8/index.html","3703e11c5ed0a11e1a449b412f197e44"],["/page/9/index.html","f823b7c7d432972b8d6320f867a6416b"],["/sw-register.js","3f59152a27b13d7ca0c8d6766669ccea"],["/tags/AlexNet/index.html","42f202cd527b331891beaa759ddb5a81"],["/tags/CNN/index.html","199c714b48767c5a4c13262db64c07a8"],["/tags/DCGAN/index.html","fa072fb6dc22b93357e67c1f2795b84c"],["/tags/DDPG/index.html","af67332fecf0e7d30929e315256d8087"],["/tags/DDQN/index.html","c7ae636956a6937dbba09bcd8001ce3e"],["/tags/DQN/index.html","83bccdc5b5a47dc29867fc63311b3ac3"],["/tags/GAN/index.html","bddd90ddc4802462b1eb228cf915a4e1"],["/tags/IRL/index.html","009736d26dad3863ecd0d86425260d6c"],["/tags/LSTM/index.html","a29aedbcb6d9b65f63621a89fce9ad53"],["/tags/LeNet/index.html","92c9bf492ba25a82f11c7ace0e43643b"],["/tags/MC/index.html","669b241a03ab6206980cc238032c5c7f"],["/tags/PCA/index.html","c61f99bebe36e187227115bace336f3a"],["/tags/PG/index.html","7e15aa14f7562619a63a545c6e0c13ae"],["/tags/PG3/index.html","170b04bc7cb043de517b430bd9991a36"],["/tags/PIL/index.html","9d2f65c083cea6243ffcf7e2babaadf0"],["/tags/R/index.html","4c32b7d209ff2d64d171f615ca9775d1"],["/tags/RNASeq数据下载处理全流程/index.html","1c9ef235b3465bc27aff9cd7ef025b2b"],["/tags/RNN/index.html","2199a58cfeb52c544e948e05a9b52cef"],["/tags/SVC/index.html","dd199e8e0ed583ceaaaa092397c25e37"],["/tags/SVD/index.html","13e7d5341ab85a67ec2c75262e7b6e80"],["/tags/SVM/index.html","cbcad4ce6ed121ebadbc99a3042a45f6"],["/tags/TCP/index.html","f14b54737c2a46000eb5db0f5a8ab02f"],["/tags/TD/index.html","c23988be46f82bd4c72046093850eba7"],["/tags/TD3/index.html","d84b41926c6abbb2626f02f4af9014a8"],["/tags/VGG/index.html","b351d74e54aebb7a350d156857a8c343"],["/tags/amd配置/index.html","78d864ebce343016f309134bda64fb19"],["/tags/anconda/index.html","d5f6846249bc2ec6b8fe61e08bb81b2a"],["/tags/conda常用命令/index.html","ff147d0662ccfcded3ff5afdf222e89c"],["/tags/cuda配置/index.html","b7cccff0a5764d6eb52eceaf6575cc37"],["/tags/docker-ldap-mysql-arm64/index.html","1b89702043df069572cbf70622439c41"],["/tags/docker-ldap-mysql/index.html","21e5842a7b8c73932d32835bfab0427b"],["/tags/docker代理/index.html","fc0c3ef953ad08335a1f2ac1346871f3"],["/tags/docker安装/index.html","de0a081e1912ace5da958396559ef7a9"],["/tags/docker容器挂载硬盘/index.html","0b14bd046890d9956af1d8552e558846"],["/tags/ffmpeg/index.html","fecdd62df1a1a452794abed897fa9c58"],["/tags/github上传代码/index.html","0e662c4012a8210347ea8c97454c744b"],["/tags/hexo/index.html","c8d1e2e2f3114a7ff67cd9fe10ec42d1"],["/tags/index.html","d6f363581008bda78b3d3047209bd657"],["/tags/java调用C/index.html","d316e2ad5c19db8302816bfe65710547"],["/tags/jupyer配置vpn/index.html","5dde23585802d07ef49f418bf236944b"],["/tags/kaldi/index.html","ea739da819bf13f22512a33372cb80f1"],["/tags/linux命令/index.html","bd3c25c8c3dd85a36c7e39f39414ba0b"],["/tags/mamba/index.html","384d2e25c0817d0de75e0921270e7bdd"],["/tags/markdown/index.html","1e4c424b2ad2944683176d50c890bdf0"],["/tags/matplotlib/index.html","0bd32a621e25aa5618df98e71e3b81cf"],["/tags/numpy/index.html","0df51dfc6c85932d0b79efdb31c40821"],["/tags/opencv/index.html","860980dfd8e6caf64522a50d6ef3606f"],["/tags/pandas/index.html","11b3be01662f2cf46352c05d3dff387d"],["/tags/qq/index.html","a1091d8bed57aca7f0a3cc44b0e046c7"],["/tags/requests库/index.html","e68a1dc5304c336505b8c6207906e3db"],["/tags/rust-多平台demo/index.html","bf35e2236f41ba23b907ab788989a8db"],["/tags/sacred/index.html","1c10e2c540f15755961ea8aee9981f8d"],["/tags/ssh-远程连接docker/index.html","429e841973fa55c132e534d6f5755e90"],["/tags/tflite编译/index.html","2e5b9237a94b2971fb47d5c8c7695329"],["/tags/tflite转换/index.html","78758e711e6ebeae59ea1ae7b8c05654"],["/tags/torch和apex安装/index.html","8f4bf413318ba52d4773eade15073f31"],["/tags/vscode/index.html","73b27903e575e276ad13eea3fd3da56e"],["/tags/wsl/index.html","4c069baac78c66dba0ec6dd0cea7003e"],["/tags/zsh/index.html","e221853e6305b73e358fd8f611aa0c43"],["/tags/代理/index.html","047d91646c538af6582c39c0ff9a3603"],["/tags/决策树/index.html","f9305f01f82bdebc3c718ee0952dad68"],["/tags/函数/index.html","78c1d46bab1f9226a34983f7d168f68d"],["/tags/列表推导式/index.html","38a3fd6c92276b737a201ffacb077048"],["/tags/助词/index.html","911c14ba2ee848a95c1c4e1e3e0e7458"],["/tags/包/index.html","b672904883513be3e3863797273e1453"],["/tags/卷积神经网络/index.html","57f17468421c9426abb2521f75efaa7c"],["/tags/双系统安装/index.html","490679d181e988fdb1739e8f0d8ee97b"],["/tags/反向传播/index.html","1db740332742b8f76e51acffc5f8d2f9"],["/tags/句型/index.html","3c15ca9781fa89d4f6e6f50da0baf918"],["/tags/可视化/index.html","6af609b3a55bd2fe46dd84d6c7d7760f"],["/tags/哲学/index.html","976d805c745a84be0c48252b764c187f"],["/tags/图像美化/index.html","aa2c88abaa4b2c8f2e2994b72fd38bdb"],["/tags/图床/index.html","28f0db87e312d7da95b5bdc99ca7bfd8"],["/tags/多继承/index.html","836accc1872540c2e0c7905ebead3d6d"],["/tags/工具/index.html","9693d73c1449a3ac8a1b8e773acb114d"],["/tags/异常/index.html","104b3aa7dae3c967a59db19b9312c20a"],["/tags/强化学习/index.html","7aa8fb26d59eab625a610581fc149d48"],["/tags/心理学/index.html","78b268be1cf689e26d9188f75b9ed1f8"],["/tags/感知器/index.html","a17a9cb60a6165f6099c3087131a89f5"],["/tags/换源/index.html","8b5574ee0a4ead3a15d09c6117077633"],["/tags/描述器/index.html","1933545c7706ca1baa757c5a43f9181e"],["/tags/敬语/index.html","549bb4e153374d4f9462dd60659fc72b"],["/tags/数据集/index.html","ce041b0f4fdcfac2787fb85978d119ef"],["/tags/文件/index.html","f0cebda5e39b3df74914e2a439b51d27"],["/tags/服务器配置LDAP/index.html","9f6ad1faa381897734e7e1a3e67f1c7b"],["/tags/机器学习/index.html","3231cc954550b760ce73471d181af166"],["/tags/梯度下降/index.html","d177765f91b90741f297fa20b4467e93"],["/tags/模块/index.html","c5619c44a9970e941c180cbfb72658c1"],["/tags/正则/index.html","b6103c73b7c967ba0b024321b40b99e8"],["/tags/激活函数/index.html","29e4746b90f546d04add813d807b222e"],["/tags/点击预估/index.html","3d30c933af2d567ed82d5fc559034175"],["/tags/爬虫/index.html","096660a9c109bb87d288718a997e2cd0"],["/tags/生成器/index.html","00a38b7d0c2c1dada5cfc18dce09b54a"],["/tags/类/index.html","0417079f5101120d082865a4b35549c9"],["/tags/线性回归/index.html","0b23a22d57811d121c8bd9c0d896d469"],["/tags/经济学/index.html","f2a3e2ad80bf43097112079cf1dfb83b"],["/tags/聚类/index.html","28e9149f8017e0a1348eaa46515db0dd"],["/tags/装饰器/index.html","f24daa831d63fdec49c345768f6f885a"],["/tags/词型变换/index.html","a81d79a103d353340563ba371af47d47"],["/tags/语义分割/index.html","8d400efe188e7daf56ba1b6e10dc209c"],["/tags/语法/index.html","de70c5673e5369611d72d05662447007"],["/tags/语法/page/2/index.html","589d558cb66120610f4e1a5ef56408af"],["/tags/迭代器/index.html","01794e02220c0057e83a3e8da2250d81"],["/tags/逻辑回归/index.html","10f3e241ac4ce87b9fbc108bd0b1fc81"],["/tags/随机森林/index.html","2bce5d1a5f313b3ae88b3fb9dbff8402"],["/tags/魔方方法/index.html","333daf561538f15b957daf09a4effe6a"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
