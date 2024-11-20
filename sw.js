/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","5c771317ab692345b6c9790f5c8f438f"],["/2019/01/02/Anconda常用命令总结/index.html","18e06b64baafb87421bf7527224b128e"],["/2019/01/02/句型/index.html","5ee35b87866d56f8d9f8b82835b89b6f"],["/2019/01/02/日语助词/index.html","082b770d0da772757d2c3501c71bdd90"],["/2019/01/03/on-my-zsh/index.html","92233caf47d4eaade1706d64fc4ceba4"],["/2019/01/04/《当我遇见一个人》摘录/index.html","4bdf7da0e4bc789ec307b4888bc432bc"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","6636471d0946eaf4344c576384711954"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","014da4929f4d5228aada90288425faba"],["/2019/01/04/经济学笔记/index.html","98091fd195814e65ae5efb0db9978fd2"],["/2019/01/04/语法总结（5-15）/index.html","8fdfcf8b2a21605ab16dc3f83f8a2bf3"],["/2019/01/05/linux常用命令/index.html","4ab442c8ff877850b9ada9296cfd1a1c"],["/2019/01/05/mamba/index.html","4b4fae6ced6ae0636ff760ebeefb9992"],["/2019/01/05/tflite编译/index.html","cd2b2679b0f50e12934e8ecca8b84805"],["/2019/01/05/tflite转换/index.html","7f7a64e6e3da2de5cc470a42c989e4e3"],["/2019/01/05/torch安装/index.html","ed17b7968c823bfc60716232b4395a53"],["/2019/01/05/vscode/index.html","20f4b3b96818ef9c7921cad219d5ac70"],["/2019/01/06/敬语/index.html","e3b75da92201dd42a0b087e37c2d20a6"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","af815ca44f6d29c293b29bc7b027a10f"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","11501f263e4b8a6503e630854ab4aa10"],["/2019/01/07/cuda 手动配置/index.html","5ac39b2fffd74437e7be8b15ca2c0445"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","3b383795a5975546501a1cb3922e27b0"],["/2019/01/07/docker-ldap-mysql/index.html","1069fa0dbdba1372fbbdc0082b6651bc"],["/2019/01/07/docker代理/index.html","5de4c7ed1313c7dbb2f253985019b5e4"],["/2019/01/07/docker安装/index.html","585ebb4f53d655d3e2efb6b768a9e56a"],["/2019/01/07/docker容器挂载硬盘/index.html","0bd68f4a5f5375c4f9b63e613c62d4b5"],["/2019/01/07/github上传代码/index.html","2fe98f21683b8af9168af46eb28591ba"],["/2019/01/07/kaldi 安装/index.html","089757c728c5457cb1f146c84c6c0689"],["/2019/01/07/linux常用工具/index.html","f8e109a59580d5817bb27e60a721c43a"],["/2019/01/07/opencv/index.html","5897e9f82791438b8257c43ac2189f9f"],["/2019/01/07/ssh 远程连接docker/index.html","5892aabd1c453916d5e5d843ad84a06c"],["/2019/01/07/导出/index.html","89db65bbd9c1ef7046c1019b8519911e"],["/2019/01/07/换源/index.html","771c79a643146eb2696e0dc311669474"],["/2019/01/07/服务器配置LDAP/index.html","a9f697f479e1ee666bf2ade7289a8933"],["/2019/01/09/markdown/index.html","de5c2dbc23be79a86abc99d5adf4a492"],["/2019/01/09/opencv图像美化/index.html","a0d03ba43db8af73efdbf59bd980da6c"],["/2019/01/11/19单元语法/index.html","5ac54f384b5ed0ad529d14102037e1d4"],["/2019/01/11/20单元语法/index.html","fc3903f0e66e581750c6fdc4013389e4"],["/2019/01/11/opencv-图片几何变换/index.html","01fb38266ee715fc732dd7d2423f769a"],["/2019/01/11/opencv-图片处理及绘图/index.html","ff12e4557cd5373c15a7cb923f20ff95"],["/2019/01/11/wine安装qq/index.html","6d798cb3432276f2f584ff77976e764b"],["/2019/01/12/tensorflow-可视化/index.html","a32a8e9b1a466b5ae2da1653dc40a8db"],["/2019/01/12/tensorflow-基础语法/index.html","7cccea38d707d88cb78a58c77c8ba926"],["/2019/01/13/RNN/index.html","bb8037d0a359e6dcf504d5f55db80b8e"],["/2019/01/13/keras实现CNN/index.html","f6d6596a1176bc5e96eadfca5e91bc56"],["/2019/01/13/卷积神经网络实现/index.html","70820300172b49715cec275e0ad16d15"],["/2019/01/13/循环神经网络RNN-写诗/index.html","48108bef048079a41f097fe898ad4ee4"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","6b5eb44e80bb993904a1123dd7b7b9fb"],["/2019/01/14/反向传播/index.html","979dd1edbf9ee1371935433bf66cfbf6"],["/2019/01/14/图床/index.html","905b0596998be7e02573ef50a5268c21"],["/2019/01/14/感知器与激活函数/index.html","4e250f0146f66aa73f52dd61c5a9c2e4"],["/2019/01/15/PIL简单应用/index.html","374a938d7350c8af7947039d790891a8"],["/2019/01/15/卷积神经网络理论/index.html","2c415950016917be3b2814512f8784a9"],["/2019/01/15/图片分类之pca-svc/index.html","6d6c7a5850838556110d31dd5c4ca134"],["/2019/01/15/强化学习基础/index.html","b724f5b0211b2fe6242bcc479619ca42"],["/2019/01/15/经典神经网络/index.html","10852ec41b28dc2be82244abc39f3a86"],["/2019/01/16/DQN/index.html","95fd935cbff0f7c7c53734b0a3865f1d"],["/2019/01/16/TCP传输图片/index.html","25c71428de23bbb6a2f884d8e184de98"],["/2019/01/16/时序差分学习/index.html","a0bde5c36e9eedc71e352ffe928f574f"],["/2019/01/16/蒙特卡洛方法/index.html","a162e4305c320d4c824e87fa18102dd4"],["/2019/01/17/Double-QDN/index.html","6264f4b611ed0f9e60995fdf2c6b0fd2"],["/2019/01/17/RNN理论/index.html","89d3b0b8399ddae4cc5edc6583fece01"],["/2019/01/17/梯度下降/index.html","508329ca8c49a4cf0e275f1b75679e5e"],["/2019/01/18/PG和TD3/index.html","4b539e8c256c1e3d293be2cec6fa84b1"],["/2019/01/20/21单元语法/index.html","08beae68167105b168c93c4cdd25a76d"],["/2019/01/20/GAN理论/index.html","629bcb88698edcfc293a23f08a55dd07"],["/2019/01/20/PG3和IRL/index.html","587f3a0c45b15cd8d68eade3fb7f52d5"],["/2019/01/20/数据集/index.html","ee207eb375a10990e1126a7ee31d6f23"],["/2019/01/21/DCGAN/index.html","b42f1be63245a09959ea7aa988e32fdc"],["/2019/01/21/LSTM/index.html","6301f49e5b8776106451bd81e9466a55"],["/2019/01/21/点击预估/index.html","c3da1fc11ff4bbb2c5d5108533a57186"],["/2019/01/22/SVD分解/index.html","7e66e6dd7f00b98cc1d50fd77ecbc5de"],["/2019/01/22/SVM/index.html","1dbe145073a247c049baab4ffe3fce5b"],["/2019/01/22/机器学习简介/index.html","e6c4e6c775fc89eddcf34cbde26c3d4a"],["/2019/01/22/线性回归/index.html","fa470e2e7b07ac460bc480448d17256a"],["/2019/01/22/逻辑回归/index.html","3f6c731c5a1414b8f800a903a15e3e5d"],["/2019/01/23/numpy/index.html","ba84b489500c9c6caf537bc9ec29cc46"],["/2019/01/23/决策树与随机森林/index.html","ee875d68cb842e4c6efb98fdc0c03b1e"],["/2019/01/23/聚类/index.html","1b6b0fee9018a877b815ebb23a6f0ffa"],["/2019/01/24/matplotlib/index.html","357534140bb5cb98b64b5dd59c53f74d"],["/2019/01/25/pandas/index.html","cc1ad34666a87e2db688cf9a5656c392"],["/2019/01/25/语义分割/index.html","9e772e7ceac81168e2690383a9b2ced8"],["/2019/01/27/22单元语法/index.html","7e01bbf412e2d9f168624d16e8582f59"],["/2019/01/27/SVM案例/index.html","e6bd9a58127e3e529717acf7d52a8afd"],["/2019/01/28/requests库及爬虫案例/index.html","416e18b4600f390ce37f5486c885be62"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","a511db3bb3e98f1a0280968a884c14ba"],["/2019/01/28/异常/index.html","e078fd292359aea794e371a5df995083"],["/2019/01/28/描述器和装饰器/index.html","2cb58bde8d6ef1a958eb876466cd6edb"],["/2019/01/28/文件/index.html","b6b24e936ce2575678188c8bb69a3572"],["/2019/01/28/正则/index.html","ba6bc034cd9376008a98d53c623b6f41"],["/2019/01/29/函数基础和函数参数/index.html","8428934ea176e8d09d3e2225186d7395"],["/2019/01/29/多继承和魔方方法/index.html","42a86d3035e5eaeb27398f90ac0522b7"],["/2019/01/29/类定义、属性和继承/index.html","9dce98274d4bb2347ab191786a521afe"],["/2019/02/27/23单元/index.html","0097293f04e8c2ef33ed77a21f450299"],["/2019/03/12/hexo加速/index.html","b52a6147819784e49adc99b3fef39b8b"],["/2019/03/12/hexo系统重装恢复/index.html","8a7c04e6422b44707f61b9a7bcd55c79"],["/2019/03/13/24单元/index.html","7f3b7ce164008504cbc233a6b9f83cb6"],["/2019/03/19/25单元/index.html","b4b87f7a534a331ce4b7cdcf34f5debf"],["/2019/03/26/26单元/index.html","54518185bad005de571cc39499b046cc"],["/2019/04/14/27单元/index.html","345fbaa53995504f59f7ee60b5aa7298"],["/2019/05/01/28单元/index.html","034bbb7673e66f20fb57069e79abf2b6"],["/2019/05/02/29单元/index.html","0c86b15c2f941038da2d86e6e80a545f"],["/2019/05/12/30单元/index.html","07bbfb82c354e08846715fe76d7cc009"],["/2019/06/03/jni/index.html","84b501e546af30f617a0bfc51bc33640"],["/2019/06/07/JNA/index.html","8a4e70991b5d98c89756f730058264aa"],["/2022/08/07/R配置jupyter/index.html","50a4a34c5e4cbaaeda97048d5c471b0d"],["/2022/08/18/FFmpeg常用命令/index.html","36b83e4013e80bfb99591cd2d72a998e"],["/2022/08/18/linux系统代理/index.html","51a475ebda9fbefc60059e5a6c5f4785"],["/2022/08/18/matplotlib补充/index.html","17982911844b6aa5b45383e004f050b9"],["/2022/08/18/常用命令/index.html","d098c6ef02d0e5f93c728c211ccafe5d"],["/2022/08/20/rust 多平台demo/index.html","321e211cd12de8815595eb54e10f2c0c"],["/2022/08/20/sacred/index.html","f06ffee512a487eff07dcf8c9ced67cd"],["/2022/08/20/wsl/index.html","f57d6eefb461f28ea473c7a7c28c508a"],["/2022/08/20/双系统安装/index.html","602b4b59eb6355b836ff91ed085e6c14"],["/2024/11/08/source/index.html","5707d39496bf0a09bb76017265a336d6"],["/archives/2018/12/index.html","24a9a4bbdd61f83bf230b2788acbe005"],["/archives/2018/index.html","9e018c6eda5b086692f1775f1b788c30"],["/archives/2019/01/index.html","eeb7d84773a22b68ca5ea06693064681"],["/archives/2019/01/page/10/index.html","26cc9f65d9f4c1d0e1434bd9a1e72c89"],["/archives/2019/01/page/2/index.html","6911d259fe86d61fe78baef5213b46dc"],["/archives/2019/01/page/3/index.html","ab42dfcb33d95e3ebeb5611332c341fd"],["/archives/2019/01/page/4/index.html","24eff2894ff6d2a44e0c0e62dfbbfe3c"],["/archives/2019/01/page/5/index.html","e82a04e3546c07dc01ffda71abaeb815"],["/archives/2019/01/page/6/index.html","44201d44860dca3330dc80d54ce3fd0b"],["/archives/2019/01/page/7/index.html","066fc6d0c765c95d8e7698a917be9002"],["/archives/2019/01/page/8/index.html","4733a008fa7bdcb8a031dca646388428"],["/archives/2019/01/page/9/index.html","153d1553327910090eab1001bd9d8187"],["/archives/2019/02/index.html","6aff73d2825700440e6d6035557a78ab"],["/archives/2019/03/index.html","fb05c5b87e9e78d550a90903ccf522a0"],["/archives/2019/04/index.html","d5a5851898f74cd5aa0545eeec487749"],["/archives/2019/05/index.html","60a56ea8ec2167a7a886b2eb0c2c1c84"],["/archives/2019/06/index.html","bffc47e64de730c2bfb5a1ceb83e1a5b"],["/archives/2019/index.html","2f51e21c02e6636c639c2b3753ccda6e"],["/archives/2019/page/10/index.html","0a2cc855b8aabe8a0d1b66947e1d33ec"],["/archives/2019/page/11/index.html","dcebe7f8a90483dd25a79a3482da3296"],["/archives/2019/page/2/index.html","e5bcd312c489ce2da5ca5abb51e8fe28"],["/archives/2019/page/3/index.html","4ae4db53aa59d06578aff45a2154f173"],["/archives/2019/page/4/index.html","dc10b74e7c56d7cce8315a3d2c1ff7a3"],["/archives/2019/page/5/index.html","7275782caed946eb9a5d216928ea4d43"],["/archives/2019/page/6/index.html","3893960551d3f05df965c8812906fb65"],["/archives/2019/page/7/index.html","a10c6cd94ef3d8d6c62c120733d7823a"],["/archives/2019/page/8/index.html","80d70f0cd431379b45f0bb77e453f5ff"],["/archives/2019/page/9/index.html","de48c7b43626b4107083616a547282bb"],["/archives/2022/08/index.html","006616239a8d139348615badfaac8c3f"],["/archives/2022/index.html","fe589b78dc488ff3bff797c57118ab08"],["/archives/2024/11/index.html","383ed290f6ef05fd2efb53da5f5bba10"],["/archives/2024/index.html","3643d5189a3ddf186e1265cc279b411b"],["/archives/index.html","86fa21f0b7e48fc48bb245005e33af35"],["/archives/page/10/index.html","99842b5f3f8281cdaf56e8efda43d7ce"],["/archives/page/11/index.html","8be5177efaace917c418bd092a322916"],["/archives/page/12/index.html","7c07857e48023b604bb45f5f6df0ba20"],["/archives/page/2/index.html","68e8e3afb01ebe469a12227f2efcf984"],["/archives/page/3/index.html","32ce75aea1b095998ba5d02a0a5f361b"],["/archives/page/4/index.html","1455c7f6edc60c7d4d9dd3233edb05a7"],["/archives/page/5/index.html","f50b61c22621882c731669d7b919bb1d"],["/archives/page/6/index.html","9d94932964809e323dfaf4e089fe44c3"],["/archives/page/7/index.html","d12c34a399dfe4268ee3369734803d00"],["/archives/page/8/index.html","81ecb46ba9082e6dfd26edd2cdfba3b7"],["/archives/page/9/index.html","5433ed7b9c4bd9f6d6d3b4c536ee830b"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","69c76630777ec7f4ec1ffb7316a56078"],["/categories/dxz/index.html","85885001e4e0316195e9a29abe8b5bf8"],["/categories/index.html","77adf3979e3a5f67d02e7731264466ae"],["/categories/linux/index.html","3a970bbea83f76c748c21e19d460c0df"],["/categories/python/index.html","80ee19431ab683ff0581f6f003df2b23"],["/categories/tensorflow/index.html","cc6e9ade07fcb5085bf72d3122dc9ae9"],["/categories/图片分类/index.html","a7f8f1329f190ae02721195878a3a667"],["/categories/工具/index.html","5bb4392d6d7e02cd8ff86183b08213d1"],["/categories/工具/page/2/index.html","42f90ad15ab68e418cb5814544a41304"],["/categories/强化学习/index.html","8c83ab12c3a874fa3c62380cf4f0d0da"],["/categories/数据集/index.html","e7132a53e4bf84cf59369c75118e020f"],["/categories/日语/index.html","a36193e268307f98bf05524a2c3a8d12"],["/categories/日语/page/2/index.html","2e9d2b470892a656697ecb70f4668408"],["/categories/机器学习/index.html","42051557fa3f34974b1dc69c13d015e6"],["/categories/深度学习/index.html","b087f0702dd6758d1aa2de3a468db4e7"],["/categories/深度学习/page/2/index.html","cb2ef3e99294ac750072f2aa4e447a72"],["/categories/深度学习环境配置/index.html","4f6145220833b5b4ba50cce84457076b"],["/categories/深度学习移植/index.html","ef3c79625b428044e85fed6df757d8e6"],["/categories/计算机视觉/index.html","b1998a7df4ec24b227b774eef904c8c3"],["/categories/读书笔记/index.html","140f983d2fa88f3a6235efad7ed8c51c"],["/css/main.css","f1a7e90ea6004ffe4f28ab9c3ee05826"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","511778a170543ce03419f23a9381889f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","2f0f8bea711ab166ede8f710ba47ef41"],["/page/11/index.html","e36cf85533f3ccad534d9e96b0284935"],["/page/12/index.html","8b5221c954b52baac57ccbe0861027dc"],["/page/2/index.html","884074d32f254213a66cb75915ef332a"],["/page/3/index.html","481128b75cd25f8f31663513f2bf0e7d"],["/page/4/index.html","14a7922290b0dbd3366f2be64df045af"],["/page/5/index.html","0ac3afafb6639373accfee4e4417d275"],["/page/6/index.html","9c3bfa20e542eecd35d07678d2c76ab2"],["/page/7/index.html","f66f9efdd4eb97e277512d98df5667b6"],["/page/8/index.html","89d507276bd12c31483ee5ce54bdca9f"],["/page/9/index.html","11b2ba636e09100953f552c1eb3d3245"],["/sw-register.js","db096c4366a527e016eaf4e9f6d0fbf2"],["/tags/AlexNet/index.html","19e8e349a515b74e9951ca5141266d26"],["/tags/CNN/index.html","6c4498c6760423b96b4423b41ff54258"],["/tags/DCGAN/index.html","025d589eda6f9ddef42bbc5765a2a387"],["/tags/DDPG/index.html","f48260f937d9c09cffcbb6db988cefea"],["/tags/DDQN/index.html","082e2bbe59ed6005fa94995e133bc1b3"],["/tags/DQN/index.html","fa9dd44fcde64f4087ab2a15fcd9a09f"],["/tags/GAN/index.html","a265cd954002631bd2a11cb59b001301"],["/tags/IRL/index.html","f5a824fc6dcd33ef4e35b10eccc34041"],["/tags/LSTM/index.html","d3b854cab091a2d9958b0a0d49de4606"],["/tags/LeNet/index.html","f9c15fbdd4b4e6a8ee920821ac67a4c0"],["/tags/MC/index.html","2a791f41b255d5582240934fc369252a"],["/tags/PCA/index.html","76f8f9485bf8118750ed09f748a4546b"],["/tags/PG/index.html","757f28ee931b0434ed257ffe3729babd"],["/tags/PG3/index.html","4b166528ccbc95d0cec4ce79a768f896"],["/tags/PIL/index.html","0602b0ff628be4c15b62458fe3850ba8"],["/tags/R/index.html","67d2d5926d586d78cb0bcac758e8ff25"],["/tags/RNASeq数据下载处理全流程/index.html","3fe4fe16a16a16d03229a6096a150ba9"],["/tags/RNN/index.html","befd83b44398f1f8475a4bdbd10960fa"],["/tags/SVC/index.html","38d8ab21ea94869a8421674926d46943"],["/tags/SVD/index.html","a069171e5af9bc8d0a5f9651fcd98da8"],["/tags/SVM/index.html","76e170f4d550270d03218accb0df1ea6"],["/tags/TCP/index.html","a34887a193304f273acff0219305ad33"],["/tags/TD/index.html","94bc6714ed81ba66f8d305ba3a963b15"],["/tags/TD3/index.html","4d3e095d3460927acaaeb17014b5e8ab"],["/tags/VGG/index.html","7f6667551441b506bc7c240265be2a98"],["/tags/amd配置/index.html","955f0c1a9bf94bae3be0764425688bae"],["/tags/anconda/index.html","f6d16c832333f667dd9123ac8bbf7647"],["/tags/conda常用命令/index.html","cb61f514c8d2cd3cbf4a4967fda1cec9"],["/tags/cuda配置/index.html","00ad218874946b8aa759d52da6b0e4f2"],["/tags/docker-ldap-mysql-arm64/index.html","806b956826a9d349e97b5a2b40d75a27"],["/tags/docker-ldap-mysql/index.html","13f91406ff646f9f73bee36b7beb9ec6"],["/tags/docker代理/index.html","3171a06bd93866a9241b2a6362cef907"],["/tags/docker安装/index.html","148452f946e6a5657b19177630d14da4"],["/tags/docker容器挂载硬盘/index.html","76decb0b0a5966e099282e41b01ba189"],["/tags/ffmpeg/index.html","9464d76d70edef8dcaa352fb41dd04cf"],["/tags/github上传代码/index.html","e50e623083dc667d756a02c1f513e2cc"],["/tags/hexo/index.html","d2c4fe1a871cf9c8c1e78fccd39f0a88"],["/tags/index.html","eee37afb02cb698d1e6eae4baa182110"],["/tags/java调用C/index.html","de06e9e5abb072b3032de3c40d7584ec"],["/tags/kaldi/index.html","87f92c5cf073015356623ece59780cdb"],["/tags/linux命令/index.html","0a67e9202bf12978d905185ec22e79e1"],["/tags/mamba/index.html","e9d24140062f86512532fd40e78965fb"],["/tags/markdown/index.html","b185fa5539d5c0cf35d06e39cb2367a2"],["/tags/matplotlib/index.html","f2b3e031f78d789ee892dafbf2cf7cdf"],["/tags/numpy/index.html","5f935cf5591eddc9bf26328281b2b320"],["/tags/opencv/index.html","d9d7e04b24ef162741a0ca228b92a71c"],["/tags/pandas/index.html","3ae9266ad58c30b53514c26242499f22"],["/tags/qq/index.html","f7714cbaf433410b5c4a197ef38e36bb"],["/tags/requests库/index.html","f6eca6f5339934227d84d1f26766b1df"],["/tags/rust-多平台demo/index.html","1a6bcc654d72d7d3ab9ae7feb3747c03"],["/tags/sacred/index.html","1a115ecce9af9a8affa2227bdfd2e410"],["/tags/ssh-远程连接docker/index.html","ee90f406a840742f2d779ed5afd8bb92"],["/tags/tflite编译/index.html","2dab132d920eed9367969a8d7b27f7b8"],["/tags/tflite转换/index.html","acd0a91fef719ab8574b8513cdcd0f36"],["/tags/torch和apex安装/index.html","c565a6e9a5fa2e4170ab69f3d774e00b"],["/tags/vscode/index.html","1115176690616bfa66e04b15cb5b349a"],["/tags/wsl/index.html","9e571b54c03e820687ff71c630c991d7"],["/tags/zsh/index.html","ad512395684f92a007c836aa91f5391b"],["/tags/代理/index.html","d0772414ddace8b9e158ce1d96c47c8d"],["/tags/决策树/index.html","d68e0825ef599c3eec9df8b04fc86dc4"],["/tags/函数/index.html","d10c628eef03602ead828f5b0f9f14a7"],["/tags/列表推导式/index.html","576f9bac9818c2392d0a75f1845567a2"],["/tags/助词/index.html","b66a33a2ae8520be55077450e224258e"],["/tags/包/index.html","06597c1f746bdae2c34a5b327239554f"],["/tags/卷积神经网络/index.html","df181679748a3e0a4f494095b4ef478d"],["/tags/双系统安装/index.html","5f4f2c8f934f649cfc5cff3659280be9"],["/tags/反向传播/index.html","76fdd9de55f48b92047f177f6e318bfe"],["/tags/句型/index.html","b8b915a9e67d4e29670b03f64b498d99"],["/tags/可视化/index.html","f8c0891cd7a4b59df180cb15f56fd123"],["/tags/哲学/index.html","f93888d48477a4f51db74b7427372caa"],["/tags/图像美化/index.html","7c94a5f673b1955e0ce17e334a83c2bc"],["/tags/图床/index.html","6a70ed956c7d2aebb462b546998a0920"],["/tags/多继承/index.html","12e1fff2b23ed96bb27e84f8853b5fdb"],["/tags/工具/index.html","ff76aa769ade570186d156cda8bd5b73"],["/tags/异常/index.html","35a174cf892cfe706c0c6bc32a1e3d00"],["/tags/强化学习/index.html","32a921e870022c5871b3aa3035fc788c"],["/tags/心理学/index.html","d66d3d154a720bdb53275d40d6f2d550"],["/tags/感知器/index.html","d15f0e95b2d150169901798e0f134304"],["/tags/换源/index.html","3e73e7837ac6e1e7a654fac477ad3736"],["/tags/描述器/index.html","14f3da0674d817430c4c9180443442d6"],["/tags/敬语/index.html","f05e219d9f9011d0f96dde5374bbde24"],["/tags/数据集/index.html","471dee3679eab0bb4bc18f43fe1a62af"],["/tags/文件/index.html","d288dc84e6bc4ac4acc122c86d0b7316"],["/tags/服务器配置LDAP/index.html","01f05880214a938eb541346749bbbb50"],["/tags/机器学习/index.html","0a68aafa210aebd2cccea1e4dc11d47e"],["/tags/梯度下降/index.html","dfb9a2a0760447ddee23a0515cc95324"],["/tags/模块/index.html","4200643124d8c75532d095c3f62cff62"],["/tags/正则/index.html","03fc31fcb87177cf5ef843624576bc89"],["/tags/激活函数/index.html","8f974fc24d6f30c6bb694c7deb872ead"],["/tags/点击预估/index.html","0f7de77bc12eda9c624c8b6377bd78f8"],["/tags/爬虫/index.html","4540f4a2026dcd2d576cb2da924f8268"],["/tags/生成器/index.html","97f1a358fbe5d8cc8ed67c6066b32349"],["/tags/类/index.html","ce128fec50c0c8a51770e9721ebdb0ba"],["/tags/线性回归/index.html","b65eeb42140093f6078798acca412e09"],["/tags/经济学/index.html","757a8a61096c195d44a5f0adb1eac2f4"],["/tags/聚类/index.html","06643fa4af83eef52436d04b4c9d871a"],["/tags/装饰器/index.html","0a58018728f1be283e2c5b1874d98cc1"],["/tags/词型变换/index.html","1d8f481547edf8443a4ed5a058838b76"],["/tags/语义分割/index.html","78233d7ae7b0ef3b953526f019a8604a"],["/tags/语法/index.html","33f76e52f1f16e0d6597fee78bc277ba"],["/tags/语法/page/2/index.html","bc2a0836332969c1f144f82e1df71a9b"],["/tags/迭代器/index.html","abf238394c6dfd98cbbfcb1285b0657a"],["/tags/逻辑回归/index.html","22521bf469a588ab6fb1c392b16060b3"],["/tags/随机森林/index.html","4ed83993690e1440b3d4278520d947fc"],["/tags/魔方方法/index.html","e02e0dd757fd09a747d26596c4d6607b"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
