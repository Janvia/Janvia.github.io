/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","0ac6ff5d95156ef700437f067fad524c"],["/2019/01/02/Anconda常用命令总结/index.html","d9d81cdee1c34cea6a9a4000d583696b"],["/2019/01/02/句型/index.html","913bc7db28ef2a7dfa4417062a32dcf6"],["/2019/01/02/日语助词/index.html","8cf2c434877e824a4bb86fa85c1f6318"],["/2019/01/03/on-my-zsh/index.html","ce4490c16a55de244f8b4ef7427fa3a9"],["/2019/01/04/《当我遇见一个人》摘录/index.html","c8db1c6652c9886b7761fedeeb5a8bed"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","da48f87f1be5fd10ddc73c3daa4dcb25"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","0ec65795c4c1e0caefa9748cf4630b7c"],["/2019/01/04/经济学笔记/index.html","5ae904996afaf54973500bc2baf7e728"],["/2019/01/04/语法总结（5-15）/index.html","a2fb8d2ee9da211258ac0ba6e086e015"],["/2019/01/05/linux常用命令/index.html","b1120ebac7207e502658508c327e335b"],["/2019/01/05/mamba/index.html","0eeb9f438f526725288b7a3c04117078"],["/2019/01/05/tflite编译/index.html","2b896d30cd7a06d01f878783f31e3d33"],["/2019/01/05/tflite转换/index.html","0e0d6bc1e798250f13bdc91c94e94239"],["/2019/01/05/torch安装/index.html","974a8ca90a4ba6b4a99739f03f379eec"],["/2019/01/05/vscode/index.html","695e87212a6ebb80e0063ae7ab2c3a55"],["/2019/01/06/敬语/index.html","b9a3cd0f939c3113225ae72948f8e110"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","15420b70e198b1ea499190a07b661716"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","4e4dc9012306bf576af7fd51f39e0003"],["/2019/01/07/cuda 手动配置/index.html","ccced1b20fc952b3914d146bb6552987"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","80a55a63bf6c26075abf76563b393f9f"],["/2019/01/07/docker-ldap-mysql/index.html","acf96efc63438834243043ed95e12c50"],["/2019/01/07/docker代理/index.html","890eb9fc5370a8e7d2114888e9b32f53"],["/2019/01/07/docker安装/index.html","2b0f6f6b180c1bc2f9d9d275954873cd"],["/2019/01/07/docker容器挂载硬盘/index.html","e7cb8449f093e74a13303772fd085420"],["/2019/01/07/github上传代码/index.html","99797dbe5b13608b825104ab60938d85"],["/2019/01/07/kaldi 安装/index.html","705085bc81f1c1e1cfb9b0014511d78d"],["/2019/01/07/linux常用工具/index.html","1957f0369ec935cdd559f3eadb57c80b"],["/2019/01/07/opencv/index.html","94cea3df873834e6c15f6c33443360ac"],["/2019/01/07/ssh 远程连接docker/index.html","9fe7ca1281038dbd28a45137b010de27"],["/2019/01/07/导出/index.html","32f4fb5a615809119aba42a499efcb51"],["/2019/01/07/换源/index.html","6e100a8756cac8592dc98c28dfd28c36"],["/2019/01/07/服务器配置LDAP/index.html","3b95f98a8fc9f73d71821c0ac4522299"],["/2019/01/09/markdown/index.html","fe6316d7b48b35b044726e4162112fc4"],["/2019/01/09/opencv图像美化/index.html","b960051b1f817e7d8df1d232fed15d98"],["/2019/01/11/19单元语法/index.html","af39c668bd5b9c74d2698d1dab19fc3e"],["/2019/01/11/20单元语法/index.html","09ab0d940a9ecd45e7d43ba55503c5ae"],["/2019/01/11/opencv-图片几何变换/index.html","21ebb671fdabc88cee7ca37bf2fab045"],["/2019/01/11/opencv-图片处理及绘图/index.html","6a383480347e5d4679db13cb69cb1721"],["/2019/01/11/wine安装qq/index.html","3bc0807a8f407d3b419b84441b38af7e"],["/2019/01/12/tensorflow-可视化/index.html","da500e904e00528e95d8b3d9786ecb10"],["/2019/01/12/tensorflow-基础语法/index.html","90960a80c73e224520c241f3bc4c739c"],["/2019/01/13/RNN/index.html","5fa6156fefa58a627bb5052484496304"],["/2019/01/13/keras实现CNN/index.html","d4278452c14ebbafcea74241feb1dd92"],["/2019/01/13/卷积神经网络实现/index.html","aed52d296f537ad4032885118be73f9d"],["/2019/01/13/循环神经网络RNN-写诗/index.html","59f682aad8dbfba2d0688e47d39d1115"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","795be311b408773d3bf9ea20af7f77a5"],["/2019/01/14/反向传播/index.html","d3b0ecd15399d492af74fa0981a32b57"],["/2019/01/14/图床/index.html","d4ba62cbca1a7fc32a8769cf60fdc33f"],["/2019/01/14/感知器与激活函数/index.html","8b83ca623a7e41197b0c2760df256722"],["/2019/01/15/PIL简单应用/index.html","47e40ae8b99ddadb7a30c80af8009339"],["/2019/01/15/卷积神经网络理论/index.html","87c517b8c2238c637e1b3570f4af9cd4"],["/2019/01/15/图片分类之pca-svc/index.html","2321130b5e53b97d0762a4591d76cd14"],["/2019/01/15/强化学习基础/index.html","c06f50354adf3ef798b36ab463b58314"],["/2019/01/15/经典神经网络/index.html","9c5c131b8e5c5ec37ff9dd33b9f28397"],["/2019/01/16/DQN/index.html","1ba85cbb159226e2e5376833e8767e90"],["/2019/01/16/TCP传输图片/index.html","b67ec9484a958a75d295ecd6859eb4b9"],["/2019/01/16/时序差分学习/index.html","e7009bd9f84e416dddd300f97a29d3ff"],["/2019/01/16/蒙特卡洛方法/index.html","7cadd1fab30499e783d9de6f79007d0f"],["/2019/01/17/Double-QDN/index.html","4ba3f2b8991e62cb5d4c672c4fad794a"],["/2019/01/17/RNN理论/index.html","1d5db950f7b2d38a2db01e1888aab535"],["/2019/01/17/梯度下降/index.html","d3b9f615fec664ad5c569c76d625ecb4"],["/2019/01/18/PG和TD3/index.html","3b62255309e0abdc02cf19d2e917f6d3"],["/2019/01/20/21单元语法/index.html","29416f068590913c220817d3d3b42943"],["/2019/01/20/GAN理论/index.html","70e759e9c7d44a971973d3b279743695"],["/2019/01/20/PG3和IRL/index.html","0d37a8dbda5a80ba947d64595048fa0f"],["/2019/01/20/数据集/index.html","1a8089f3d196c6dbaca71685a83e6f12"],["/2019/01/21/DCGAN/index.html","73aa73139e10b15713cd94bde64f39b7"],["/2019/01/21/LSTM/index.html","a5e9ee09d844cd6f847259bd6fc90ad2"],["/2019/01/21/点击预估/index.html","828b40e3db5132879dfd3e486a637fac"],["/2019/01/22/SVD分解/index.html","9b98026519d0b832c01145b49103b2d1"],["/2019/01/22/SVM/index.html","e0cfbb95113a836e80de15980ca91b8a"],["/2019/01/22/机器学习简介/index.html","6a6959bc5639c7eced7fb178ce28266e"],["/2019/01/22/线性回归/index.html","90f56d4e23e49268e07d5c1744d3e521"],["/2019/01/22/逻辑回归/index.html","14136fc584d2f97c042cfd64325a8e79"],["/2019/01/23/numpy/index.html","19e929764fd0ebed883720cff5a2893c"],["/2019/01/23/决策树与随机森林/index.html","8cccb11d694c6c44b253ca4780c03730"],["/2019/01/23/聚类/index.html","72628f273bce2dea575e3b1bfce91b57"],["/2019/01/24/matplotlib/index.html","82b36b64993938f364810bb6b984ae11"],["/2019/01/25/pandas/index.html","474a1e3025f6cd9e84ab0847ea442d11"],["/2019/01/25/语义分割/index.html","cb547d67f86d380217212bc45970f883"],["/2019/01/27/22单元语法/index.html","d7252ec302a00d9d1bde8ae022b2e53d"],["/2019/01/27/SVM案例/index.html","486fddc51d44fc170044f95949325353"],["/2019/01/28/requests库及爬虫案例/index.html","c625d65fe1367930dfb53bb3166c30ce"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","89335e017d4afdc971230bdb4659cd7a"],["/2019/01/28/异常/index.html","a970ae9043e127aac7537f6f901ecd7b"],["/2019/01/28/描述器和装饰器/index.html","54b13ae58bf9b8ff4b8741b4a0307679"],["/2019/01/28/文件/index.html","e51282665d1e4b49f6fd0a1fb147df13"],["/2019/01/28/正则/index.html","f06e46ff9a17473c76d3dc26e1b99c53"],["/2019/01/29/函数基础和函数参数/index.html","c1ad7f14cdb37ce57c66a3581b07fcc8"],["/2019/01/29/多继承和魔方方法/index.html","165e691f0228f4b023dfeb613b46ab17"],["/2019/01/29/类定义、属性和继承/index.html","f2151f2a5a331ed8758867ab75afecff"],["/2019/02/27/23单元/index.html","04b9af4ae621e242843d29aa8b80c41c"],["/2019/03/12/hexo加速/index.html","ef4d3555d6127768d3058038c164d54d"],["/2019/03/12/hexo系统重装恢复/index.html","89cd115e92a57ee272a5fb2bfacc39c3"],["/2019/03/13/24单元/index.html","d6368eb79330864084c421649324107b"],["/2019/03/19/25单元/index.html","3a8e73d33089fdfd0f807c665d930045"],["/2019/03/26/26单元/index.html","b8fbae36c9711557e4e12c514ce637cc"],["/2019/04/14/27单元/index.html","720d58d5ab6c5ef86582bf04f4103ded"],["/2019/05/01/28单元/index.html","284566d01e92b8e652f99c670dd477af"],["/2019/05/02/29单元/index.html","3d569652cb38942fbcd90c036afebe41"],["/2019/05/12/30单元/index.html","13dd5e8d8f38efbe8e2e348ddf0c7a87"],["/2019/06/03/jni/index.html","922eba30152c8f414aa075fb3cba9cf3"],["/2019/06/07/JNA/index.html","676f7ef24d21288999ec2ce0806e2fe7"],["/2022/08/07/R配置jupyter/index.html","1a43d5c0f8cf4513af4e19d8f5fdea83"],["/2022/08/18/FFmpeg常用命令/index.html","a77538551bfbaec11154e96dbb10f1c7"],["/2022/08/18/linux系统代理/index.html","1e8dad49b9f4f8ab24a74c41f4d9d7a2"],["/2022/08/18/matplotlib补充/index.html","9c5d427560c26e9e7964964c74808115"],["/2022/08/18/常用命令/index.html","37f0ef9c16a6affa9039444cfc814ef7"],["/2022/08/20/rust 多平台demo/index.html","32833e7134bffa5f5d7e4d316f2ce8a8"],["/2022/08/20/sacred/index.html","4402c9c9043011b365462ef5624ae7a6"],["/2022/08/20/wsl/index.html","8cdf3907f6b05de7a7dd9ed28a840ab9"],["/2022/08/20/双系统安装/index.html","31fa4e17af5d25d6d572c876cffbaed0"],["/2024/11/08/source/index.html","f84a1c5b7c7849cbaebe976f3244f2bc"],["/archives/2018/12/index.html","cf0a26084528cec2aa510ea63e13acea"],["/archives/2018/index.html","f5374471daae655ba3ad6e309e52318e"],["/archives/2019/01/index.html","fa8afc4a8ad0ba37bc8d04dd5b978c9c"],["/archives/2019/01/page/10/index.html","de07c552dace08b2cb1ac0317c1961ee"],["/archives/2019/01/page/2/index.html","c328de34a26af817ce567b95aa8f6188"],["/archives/2019/01/page/3/index.html","7830e10d6a0b6d63807e07cb524475a8"],["/archives/2019/01/page/4/index.html","90d4dba3999db06496a33a91c6b3ccda"],["/archives/2019/01/page/5/index.html","e965ad795441a3cd847657452f2d74a2"],["/archives/2019/01/page/6/index.html","375691457a550597f85d0b3eacff60fe"],["/archives/2019/01/page/7/index.html","7085ffeb13decaaeeb18821013f31252"],["/archives/2019/01/page/8/index.html","d213cff2f6fe3fe6b78384cde00b47d1"],["/archives/2019/01/page/9/index.html","0027dfc1dfd54924817b46fe4f3d2967"],["/archives/2019/02/index.html","cec43de92a923248be73c2dd4c7e34d4"],["/archives/2019/03/index.html","1b8a04e1c9b02f0bceeb0278aa21890b"],["/archives/2019/04/index.html","f1122e7660588b1fb79f166eb5a65420"],["/archives/2019/05/index.html","4ec2fccf37740c2f19605a6df0a6d415"],["/archives/2019/06/index.html","4e4ffd9eaf61022eb0df164f981575de"],["/archives/2019/index.html","ed854a6b29b7dbf69a24c55f26bc6a66"],["/archives/2019/page/10/index.html","a750feada6ea4c5546d2e94130db508a"],["/archives/2019/page/11/index.html","03b8ede5af0e648f4afec122fe36f48b"],["/archives/2019/page/2/index.html","7676aa23d8f54421e751cd1931dc998f"],["/archives/2019/page/3/index.html","7bb0db031fa47bf5d8aa26c9d652d895"],["/archives/2019/page/4/index.html","b638bd59e11e465703a4deb0e27c9441"],["/archives/2019/page/5/index.html","918f858ed606774a2112bae540538d53"],["/archives/2019/page/6/index.html","e795186ba07413d5dba232c107ad77f1"],["/archives/2019/page/7/index.html","9d82f99c1586eea48bcde99d0aa30ca3"],["/archives/2019/page/8/index.html","a67095b758d6b65a1e8a731890014108"],["/archives/2019/page/9/index.html","f5f11ef347eeae2b7acb654092726514"],["/archives/2022/08/index.html","92036bf88800641e661ce6716ff31742"],["/archives/2022/index.html","e2392f157f99ab783befd3f47170144d"],["/archives/2024/11/index.html","74eb53995f768fa66c0f8bd286f140d1"],["/archives/2024/index.html","b524863c89f988c2d5cd78f1cdfcae1b"],["/archives/index.html","98ca3f8dc4e10e2082d3c9200f413c5b"],["/archives/page/10/index.html","57c88f769eb12fc13291d31cb6911645"],["/archives/page/11/index.html","3efc0aebfd4d1ea6ccdd21a7e0d087cc"],["/archives/page/12/index.html","768c6f219b905495d0152fbd7919984e"],["/archives/page/2/index.html","4e57533104aa58490998d921a82c0d0a"],["/archives/page/3/index.html","83a3b310991bc9ce1035b34ec8ccaac8"],["/archives/page/4/index.html","b8e2aeff8aa1b4ce2f3f65f5fdd3ed8c"],["/archives/page/5/index.html","54a07c0d614edb6562ccb4d9b3dfd431"],["/archives/page/6/index.html","d372acedd3949d487c723080c7d173c0"],["/archives/page/7/index.html","48509dffa4d1881bc1ece70b7fdca9d3"],["/archives/page/8/index.html","fbf95bc734a746215c6eb8516e7a74d3"],["/archives/page/9/index.html","cc714971dc5dda550a84156e6c4bfa86"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","99fefe5084d956baa3b3e4aa6122ff3f"],["/categories/dxz/index.html","401e9d4f46df222e6b8f30ef4f0eb3c9"],["/categories/index.html","fcc10fb3ea851c51f022e48b575ac657"],["/categories/linux/index.html","30dddd9ebcf2c330a776ee3ad256154d"],["/categories/python/index.html","cef985ebf084575a446802d169ede615"],["/categories/tensorflow/index.html","73cf7910eeb002c958b7377c7401bd60"],["/categories/图片分类/index.html","2cea43ef6133e0d0e6f81a878148eb97"],["/categories/工具/index.html","87262f2d8f43d39a94f5ed507dde5c53"],["/categories/工具/page/2/index.html","ee14a1eba2479beb96353500d83afae9"],["/categories/强化学习/index.html","b1142b9f8f94668336c8f5fcc5dd60a1"],["/categories/数据集/index.html","b7974a5ce4a3761b0dead1eec754feef"],["/categories/日语/index.html","7a67ebde725d052e5bf7fc6c4b650169"],["/categories/日语/page/2/index.html","9292ab08507ffe92321af4691209307d"],["/categories/机器学习/index.html","b112526bb0191a62dc8a11c343f91092"],["/categories/深度学习/index.html","934b9800bc1caf743e8180e0b651a178"],["/categories/深度学习/page/2/index.html","a0a452c97520d5e92a3e508529e46b92"],["/categories/深度学习环境配置/index.html","24114ae92f903718645a9a3a3d1de84a"],["/categories/深度学习移植/index.html","1e13fa103e88e2efc4909ce1b9adda46"],["/categories/计算机视觉/index.html","b8eb0205b646024ea89d44da5b6e1917"],["/categories/读书笔记/index.html","3506dcdc4c75bc4f74b4b37ccc7fde0f"],["/css/main.css","a18d057d44c8d923841763196582c5b4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","cc95ef292668b6373ff100320df0a4eb"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","4e78e1cad5884a4bc004a7a17044b99a"],["/page/11/index.html","6663beffe737432c484e6cfa90de63a2"],["/page/12/index.html","9c101f91a5b870f954fcb0cae378b248"],["/page/2/index.html","5201ecf33ad0cfed5899e192f01ee51c"],["/page/3/index.html","b9d31e0808fb36802e544cc5053b6324"],["/page/4/index.html","f9227a67f645cf756a09183efdd535c2"],["/page/5/index.html","0d765dc343bff489403b742181aea6b7"],["/page/6/index.html","7f1575deaf65d982dfd57ab48d224bfe"],["/page/7/index.html","53e93b433c2383c6553fa5813ce4b92f"],["/page/8/index.html","e06c41e231e28b8236584dcdecf41423"],["/page/9/index.html","588639ddb0a28d64be43f5acdf094f1b"],["/sw-register.js","32067d86e17d9588b1692a06d8f15d92"],["/tags/AlexNet/index.html","f53c60d7b6bc3a85d685835b075e7334"],["/tags/CNN/index.html","f290f646d38101065bbc9e5fe51aaa15"],["/tags/DCGAN/index.html","ff63279b4ba1cc24f48e948eb2329b86"],["/tags/DDPG/index.html","0ab903e46ef4e8a05814093a6a3a98ab"],["/tags/DDQN/index.html","8cf0a34611fbfb692650615c2ce76d3a"],["/tags/DQN/index.html","0967fc46bd3247b6697cc66df630241e"],["/tags/GAN/index.html","bb57e86b6ec2423a152cb5e47682e0fd"],["/tags/IRL/index.html","fbe60105171d8ae4aa383b039b064450"],["/tags/LSTM/index.html","79be1e44eb90dda40299ad2023f90e80"],["/tags/LeNet/index.html","043911292fd9a62c90abe6fdd98a116d"],["/tags/MC/index.html","df49dd82bf1f413914dc6f534e56f92c"],["/tags/PCA/index.html","ad06f5dae5cdf4c7c21e04773e984c7f"],["/tags/PG/index.html","34c82293112ef05b3b934b9b58984c1a"],["/tags/PG3/index.html","f5d24a517c9222a1b237aaee43dbd7e2"],["/tags/PIL/index.html","06c6651324088015017190e0e1922bc5"],["/tags/R/index.html","35d0f88af09ccd3931e9b466293f67e4"],["/tags/RNASeq数据下载处理全流程/index.html","adca52717e7e4120e6f9995fd3a1f08a"],["/tags/RNN/index.html","30a750da7815ea900ad1af2f0b6ad2ac"],["/tags/SVC/index.html","3f5288b2df22c8b9e477795f0319ded2"],["/tags/SVD/index.html","28295dda60f42189de5d6f261d4fe644"],["/tags/SVM/index.html","81872da038b4058e1bb622b89756d6dd"],["/tags/TCP/index.html","7a5d81e393ec579aa39019248db7442e"],["/tags/TD/index.html","3daf791e3ae6d96d2afc7b2e33d4fbb3"],["/tags/TD3/index.html","6ae18f57f4be0f4920afc10cc34501d8"],["/tags/VGG/index.html","f371a7e6be49630e2273c8eb8e1f5b47"],["/tags/amd配置/index.html","b56272a8cf7e6a5a9535d5fbd5e5f8db"],["/tags/anconda/index.html","1d5480b69f90297996b98f43782a465d"],["/tags/conda常用命令/index.html","b08df60503b2e8d5b05eebc6d515a6a4"],["/tags/cuda配置/index.html","5e3a1ae0aa34f608f5e859cad0d84ee9"],["/tags/docker-ldap-mysql-arm64/index.html","46e814fd680d7e01fbeac3e1bbc0512c"],["/tags/docker-ldap-mysql/index.html","734dc2a317207ee1c8fec3638e14ab56"],["/tags/docker代理/index.html","0778f1690badafe4e1e53f55b5929667"],["/tags/docker安装/index.html","d51ece7fe29bd0e68e350b933fad8f4b"],["/tags/docker容器挂载硬盘/index.html","0360989f846ffd84b43ea6b44a27dfae"],["/tags/ffmpeg/index.html","49262098a1dfec977b8720555a7d459e"],["/tags/github上传代码/index.html","7ca2de98b872317a84bc411505dc873f"],["/tags/hexo/index.html","05557f66d03975f337d7335c99a17418"],["/tags/index.html","111c271a2f6076b51909bf5ee46722ed"],["/tags/java调用C/index.html","32112848e2aa7d2aad9c2d57768e167d"],["/tags/kaldi/index.html","112690732725b7a814ec60806f61993a"],["/tags/linux命令/index.html","59ee23dfd58252ff5dbff1c942bb0b69"],["/tags/mamba/index.html","bb7ff6cddeb247d500d2a592db137a47"],["/tags/markdown/index.html","8b2841e4f5ffd75753ac9072b426a1f5"],["/tags/matplotlib/index.html","17988644410278ff41aff8702eea9902"],["/tags/numpy/index.html","8714b4bdf119898f659ffc3abbfff9c7"],["/tags/opencv/index.html","75b13c1d2d9c3dafa87c7cd3ad8c1edc"],["/tags/pandas/index.html","3d78993e96cf6427f7e46f9ce99e5ef8"],["/tags/qq/index.html","290ad081b1188f22366bb4b9f3263ed4"],["/tags/requests库/index.html","4e60f79355af0a47bbcc325f483d0f2e"],["/tags/rust-多平台demo/index.html","824049c87e128d1c94bfb6a5c9070ecb"],["/tags/sacred/index.html","ce6ab797c9782189047b45c9e078a9ef"],["/tags/ssh-远程连接docker/index.html","9ff4ef4d899d27966001229e62cbde44"],["/tags/tflite编译/index.html","c24cb5fee5817606b50146714dd47f3f"],["/tags/tflite转换/index.html","e4a19b2a7cdeffc987d2e4c0eb573759"],["/tags/torch和apex安装/index.html","ec17392a7a313c627f3c538f7910f878"],["/tags/vscode/index.html","e7de02503023cd9c729c43d840822339"],["/tags/wsl/index.html","377bd768a6b661283678a30251c8996d"],["/tags/zsh/index.html","d97bd2ce14ffe9362c9ef3deeb5b29e8"],["/tags/代理/index.html","975fd9bf8d76193a6931688576b74cb1"],["/tags/决策树/index.html","ef03c8392f8eef08ed144267b07372b8"],["/tags/函数/index.html","ae3eeb0b4395d97401709c86b2de91af"],["/tags/列表推导式/index.html","86b280161e2def62c68a6a356f0a2234"],["/tags/助词/index.html","3c0b4813acffa9cc3052944589da45bf"],["/tags/包/index.html","74b2b04a115a128fb72c33355a1cffe5"],["/tags/卷积神经网络/index.html","9d111f0fd2e631abc57f73521142b4a8"],["/tags/双系统安装/index.html","5ed0766389cfd01c1430926571a90e4e"],["/tags/反向传播/index.html","8e9909162dd6566b961d8a45da0f7d2f"],["/tags/句型/index.html","84cb4cf06562feb4b7e0356b3aa2d743"],["/tags/可视化/index.html","b98a56f43a88aadd58e29ce27d48b7ca"],["/tags/哲学/index.html","276cb395a12319bab5084139dd1a98c5"],["/tags/图像美化/index.html","c84a3304dd510648af3c9048422be790"],["/tags/图床/index.html","975cc3c997fb0b79ead75641fff2072d"],["/tags/多继承/index.html","b74dafccb824aa34295250d1feaeff25"],["/tags/工具/index.html","6c5180c60e1c1694f10bc5a1b86f3f8f"],["/tags/异常/index.html","4902b5e0398484bfebad30ca833bbd27"],["/tags/强化学习/index.html","5d7ecd9b1833736f084c2119fe115c9f"],["/tags/心理学/index.html","161c0b0c3333e243fd516697a141aab2"],["/tags/感知器/index.html","69a9631f60b3bedbc14f80e5d0361ad9"],["/tags/换源/index.html","f6393915c6dd274704d205deebbbe0d7"],["/tags/描述器/index.html","b3f79b1eb7350cb34d79e9ac274023bf"],["/tags/敬语/index.html","9a4778ec0ad15fe943b4c4478ba2f040"],["/tags/数据集/index.html","a768b30d479c4b33060cecca2c201d72"],["/tags/文件/index.html","1c5763946d77a0ebc93272ddea911b9a"],["/tags/服务器配置LDAP/index.html","0e8253e5244e7c08577db11d9228bcb7"],["/tags/机器学习/index.html","27f47fcf9cb88ecec40a341cc5f2b2b4"],["/tags/梯度下降/index.html","b4ec782d926fc04b06ad8fc2adc11134"],["/tags/模块/index.html","99cd9c647336b1929113bf2b04b65199"],["/tags/正则/index.html","79d9f66deea095e4f8b48869b1de63f7"],["/tags/激活函数/index.html","f629c5bee33d38b499ad86b9fda8c1fe"],["/tags/点击预估/index.html","d87062d402ec13561bf450dee7b77750"],["/tags/爬虫/index.html","e6ca420a45f0019d190d35d3db59a552"],["/tags/生成器/index.html","e3607734674f39f1913c5c73e61141f4"],["/tags/类/index.html","d1ce484500615b0bf9ad6675bf0d3367"],["/tags/线性回归/index.html","8d6c395c42e8e0df433137e9b5bf6039"],["/tags/经济学/index.html","d37c9db3fc5a9de070a7c9e447f9413b"],["/tags/聚类/index.html","6f39e256c8872dd6f8adcf17d2e4c7b0"],["/tags/装饰器/index.html","2a10b328275b7a51e40fc9f05bddfce5"],["/tags/词型变换/index.html","49628f099f4a9de0318018b00237eb1f"],["/tags/语义分割/index.html","a3e0a89d164aac93bb728907d093af53"],["/tags/语法/index.html","b509ec7fecb53fdecdba50edffe9b462"],["/tags/语法/page/2/index.html","ef67c54b2ecda482d23bfd51e9a26780"],["/tags/迭代器/index.html","9bea941c6a6e4122b88ab01b946432ba"],["/tags/逻辑回归/index.html","7ca459b856a303e2c900fedb1001d8dd"],["/tags/随机森林/index.html","c148acfe6fa86bab3cb242ad36b7c279"],["/tags/魔方方法/index.html","770eb9ace777491db79ea1b9671ec562"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
