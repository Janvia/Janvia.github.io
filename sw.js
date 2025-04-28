/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","5716f68178cd154692c36b72e53141b5"],["/2019/01/02/Anconda常用命令总结/index.html","c8f57024c857bb428c61549384f9bdd1"],["/2019/01/02/句型/index.html","516b278f651ed9d5cacdca2e47ba2841"],["/2019/01/02/日语助词/index.html","3a593265a766c91b4c23dcfcdacd6a68"],["/2019/01/03/on-my-zsh/index.html","e4e08568881ec6e3e0d64aa28026ab8a"],["/2019/01/04/《当我遇见一个人》摘录/index.html","de228a42112faf9256ee752ab3c8573e"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","eb0726bfbdddda0a82172427eb4883f5"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","c559ca1e8a001630d270983bfecfd6cb"],["/2019/01/04/经济学笔记/index.html","1a197bb1ede9846c2dc64e7d7b45cddd"],["/2019/01/04/语法总结（5-15）/index.html","00bad39d6dde4f0184bc3c3c96ae5e7e"],["/2019/01/05/linux常用命令/index.html","eb31a3909bc5249f5edd9bad23552ad6"],["/2019/01/05/mamba/index.html","a6685cacc2b1241348f6d72162f08898"],["/2019/01/05/tflite编译/index.html","c528a3656cf9e9528f2a2dd0ed2a4e65"],["/2019/01/05/tflite转换/index.html","b4dc7b4c5d962ceda5699b74e0659792"],["/2019/01/05/torch安装/index.html","9859e6acd144fa6fb558bff29664ea50"],["/2019/01/05/vscode/index.html","d12c144ffeef6566b23268a9c8333d86"],["/2019/01/06/敬语/index.html","5dae8786ccce5fa75ae1f0f66c26a499"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","f2af9ba2c620ade36865f38555332fe6"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","721062e0ce49376ec6a51af9f6a17ebf"],["/2019/01/07/cuda 手动配置/index.html","4a720d8e32fd2eae6ccbc699fe279f60"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","a6d672320fcb2963e5b401a122fdfbd1"],["/2019/01/07/docker-ldap-mysql/index.html","4100a0dc62d417789603276c0be36db7"],["/2019/01/07/docker代理/index.html","1d7ba870062f03d2b03263f110a6b5d9"],["/2019/01/07/docker安装/index.html","0c65d9790dc58eee2b0bb22bf807637d"],["/2019/01/07/docker容器挂载硬盘/index.html","ac0996cbdf17431ffa6a85819408dcd7"],["/2019/01/07/github上传代码/index.html","5ad8970a616172f70cc49fd1640607f1"],["/2019/01/07/jupyter配置vpn/index.html","c28dbae252f2cb7b8e6838bbec49d9b6"],["/2019/01/07/kaldi 安装/index.html","a3a368cc1879b22e540712b616d821cd"],["/2019/01/07/linux常用工具/index.html","1a087cff99a888f520b490aea6ffdecc"],["/2019/01/07/opencv/index.html","908fe50ab6bec717e5dca45e0b904488"],["/2019/01/07/ssh 远程连接docker/index.html","da6b28067be42f68373137996b9fe7e8"],["/2019/01/07/导出/index.html","989e2cb97f74a1af16424c8cbc53b6f3"],["/2019/01/07/换源/index.html","515155c20d393a68b558e39ec2d1895f"],["/2019/01/07/服务器配置LDAP/index.html","b974019f8effbf313c1f703b9541d48c"],["/2019/01/09/markdown/index.html","b46ba5fa84c00c3103895e1ccc4cab17"],["/2019/01/09/opencv图像美化/index.html","9127d996749a645aeb3934f9d65ed61a"],["/2019/01/11/19单元语法/index.html","307879faf9ff62482371ea9f7f10abb3"],["/2019/01/11/20单元语法/index.html","bcebe1f7e35fd06b01ab58c67c5221c1"],["/2019/01/11/opencv-图片几何变换/index.html","542c6f2b6160e174037a912f525c7e51"],["/2019/01/11/opencv-图片处理及绘图/index.html","50010a7d6374de61cb64396a3b2076d4"],["/2019/01/11/wine安装qq/index.html","7acbe6f7538705270ac17edff6e5d40b"],["/2019/01/12/tensorflow-可视化/index.html","1113395aba5fcea59731f124c72c0713"],["/2019/01/12/tensorflow-基础语法/index.html","7209bfa8f74b62e7e2d359215e54b9eb"],["/2019/01/13/RNN/index.html","4f5e3a8318374ee1531a6f00539d974a"],["/2019/01/13/keras实现CNN/index.html","f2a5ea5e92474c76d5778329dcbd855a"],["/2019/01/13/卷积神经网络实现/index.html","7a0be77ff9b5ab078ec0e3c1cfa4123d"],["/2019/01/13/循环神经网络RNN-写诗/index.html","22ca7b87dd82f1224fc287404b7cdaed"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","e16f471b287dbc5bb5808de835962778"],["/2019/01/14/反向传播/index.html","de7a82b251b457d6ccd9a9af77bc29e6"],["/2019/01/14/图床/index.html","35b0bcce406ad5b3e9204c38e4dc8339"],["/2019/01/14/感知器与激活函数/index.html","3e2ca18808b41eb7f2521482558a0cf5"],["/2019/01/15/PIL简单应用/index.html","243e9aee5ee8bc0101ac52093ef8ab2a"],["/2019/01/15/卷积神经网络理论/index.html","c50b3c51c491c41158c9204f467efc76"],["/2019/01/15/图片分类之pca-svc/index.html","4126a3064bdc3de620c57e15809d8a22"],["/2019/01/15/强化学习基础/index.html","717be5da3ebaa49925835c89a3b4dcc0"],["/2019/01/15/经典神经网络/index.html","b4cbd4854a4a9536d21dbaf92da9e02b"],["/2019/01/16/DQN/index.html","3618fd28f3e87ce984843eeb768949a0"],["/2019/01/16/TCP传输图片/index.html","60b1fadb687735d040863f3834154c02"],["/2019/01/16/时序差分学习/index.html","12463e26bdfe4145793147d6806e4650"],["/2019/01/16/蒙特卡洛方法/index.html","f64c8579598ee0cf59146699e30cfebe"],["/2019/01/17/Double-QDN/index.html","7a3a699528b1cd58eb8b43b59a3e9ac0"],["/2019/01/17/RNN理论/index.html","0d1af0159c755c28fc1c96e109c12b6e"],["/2019/01/17/梯度下降/index.html","2ceec673b1bb62c932e60429c21abe5a"],["/2019/01/18/PG和TD3/index.html","3b0863da8104fc9e60363d4da97d1471"],["/2019/01/20/21单元语法/index.html","87501236e112f18807842ad12b60a4af"],["/2019/01/20/GAN理论/index.html","cff595ed1fcec842ea01d2c6f0107167"],["/2019/01/20/PG3和IRL/index.html","ba29f3af5880012b6c19faaf779cdaa2"],["/2019/01/20/数据集/index.html","45015c763c4eb500c25ae67a799ca2ec"],["/2019/01/21/DCGAN/index.html","23446e073e1e34d9e1b81fb7616cd7e9"],["/2019/01/21/LSTM/index.html","92bc82ef7d77c4058dfd06ee28ae37e0"],["/2019/01/21/点击预估/index.html","a0a6ca44568ce50196d6856956b6036c"],["/2019/01/22/SVD分解/index.html","1048b46fbc1551cd7dfb8d6de6839bbc"],["/2019/01/22/SVM/index.html","4edd2458482a3b42f6be8bda5371264b"],["/2019/01/22/机器学习简介/index.html","6eec143a4e50699485f00217aeb31ec1"],["/2019/01/22/线性回归/index.html","6991ec330069d9fcb57bc586bd5fa86c"],["/2019/01/22/逻辑回归/index.html","a7d6b95b9035e001b6479ce234176fd5"],["/2019/01/23/numpy/index.html","1a5945e5e40205f6c96240de271609d7"],["/2019/01/23/决策树与随机森林/index.html","d743c21acbab080f3277d3651aa39053"],["/2019/01/23/聚类/index.html","de27e192c567e1d9ce4cdb187fca9d88"],["/2019/01/24/matplotlib/index.html","861aa89f3bd467f85fc919ab72bc894a"],["/2019/01/25/pandas/index.html","1c851e82b9db9dec10d286fffd6d289b"],["/2019/01/25/语义分割/index.html","7ce507ff579a959c7aa5e02e8d8e2dd8"],["/2019/01/27/22单元语法/index.html","c3017a4043253f57d4ebf4ff2d55115a"],["/2019/01/27/SVM案例/index.html","544383a33335316f9e0c36392918de8c"],["/2019/01/28/requests库及爬虫案例/index.html","92268022761373794046fc170ec8af30"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","8fd5b38c02f2f9af18c3ba9c5749ea13"],["/2019/01/28/异常/index.html","2e7412365a5c1da4be66560bb4c26a53"],["/2019/01/28/描述器和装饰器/index.html","392ff1a8d40c383639b326bdcf4ede33"],["/2019/01/28/文件/index.html","950c5fdcb44df2f2f4f9a3e426474357"],["/2019/01/28/正则/index.html","f890d36db9d83d9003d442f36ce2615b"],["/2019/01/29/函数基础和函数参数/index.html","b50caa526b98a370c65df244aa889566"],["/2019/01/29/多继承和魔方方法/index.html","37befd579d6caf5774845265838b0d08"],["/2019/01/29/类定义、属性和继承/index.html","91888173cfd1ad06948b9feae22dd2f2"],["/2019/02/27/23单元/index.html","d0d5141bf99f85c2ee6203194760ad8e"],["/2019/03/12/hexo加速/index.html","5876f8669b8630cb42461d3ff5b03d56"],["/2019/03/12/hexo系统重装恢复/index.html","4f63e2c75665ff4d78179f7df31cb756"],["/2019/03/13/24单元/index.html","acc0ad0f23e97dcb0d6b42fab4d262b9"],["/2019/03/19/25单元/index.html","5a2b52f4a39bb80c2512c810beb3131c"],["/2019/03/26/26单元/index.html","3d5be65930a3e534de2490456e81927f"],["/2019/04/14/27单元/index.html","42dc83cea7fd96a0c6443b5d502a3270"],["/2019/05/01/28单元/index.html","22f91e767fd3b7677733aa9b303ce0ec"],["/2019/05/02/29单元/index.html","61f896ac6342e27329996664da4b2197"],["/2019/05/12/30单元/index.html","01aeca38b0fe7cb614a4925335d0dafb"],["/2019/06/03/jni/index.html","9ae05f3b85d68533967caec38d538cf2"],["/2019/06/07/JNA/index.html","e00c9c7cee8f0499823b4f0bf7017ac1"],["/2022/08/07/R配置jupyter/index.html","2fac078aec8db9c2f53ca44055507423"],["/2022/08/18/FFmpeg常用命令/index.html","a117c128fb40f3786c40c2f77315a18c"],["/2022/08/18/linux系统代理/index.html","0f399ded2ddac39f19a258a2df151392"],["/2022/08/18/matplotlib补充/index.html","8ae44299c26f2948fbd750d7a180c813"],["/2022/08/18/常用命令/index.html","fe200627c810598027237bdd6c25dc12"],["/2022/08/20/rust 多平台demo/index.html","11a3a944737417ae1dc047a19ab15616"],["/2022/08/20/sacred/index.html","6ab49b6d4b3a51c84cc3cf452348a84e"],["/2022/08/20/wsl/index.html","44dedfb758b1dfc8af6576765aa48e1a"],["/2022/08/20/双系统安装/index.html","b6cc57ffc7f285e2d6a73d21f3190916"],["/2024/11/08/source/index.html","fd050afe5c24c5af1bc0fda4799aebd6"],["/archives/2018/12/index.html","ece34b9dfc135869bd4f9eec832383fb"],["/archives/2018/index.html","c93870df2624d435abeee829c939fc54"],["/archives/2019/01/index.html","a6b4fb8d25f23e731d1f712eb0f17619"],["/archives/2019/01/page/10/index.html","3c70e55a41ef336ff9f3ac03737d70a0"],["/archives/2019/01/page/2/index.html","99f90f9e8da00abfc694b7b9ffcd9f1e"],["/archives/2019/01/page/3/index.html","dee133236383f36484106971a1a484d3"],["/archives/2019/01/page/4/index.html","dc89404d68fbfd55d6d8a282a207ab27"],["/archives/2019/01/page/5/index.html","e31c635eca32225dd375e7ac6a3e61bf"],["/archives/2019/01/page/6/index.html","823224946d8f01802d711b3062aa784a"],["/archives/2019/01/page/7/index.html","3ae07d458813ecf4ae25f9ee0e94a20d"],["/archives/2019/01/page/8/index.html","2ff161c3f99bd747c29d3d9916e74518"],["/archives/2019/01/page/9/index.html","1fac6902886a0eab619e7938196f34fd"],["/archives/2019/02/index.html","770c59de2483db64629437e802eeb89c"],["/archives/2019/03/index.html","d33ef3c7551d0f3cf8165235a142c2ea"],["/archives/2019/04/index.html","eb11a7c553f1ec5dd9dc1570d59a2485"],["/archives/2019/05/index.html","6c4e2c1f8af1441bda63adabaaa363be"],["/archives/2019/06/index.html","e2352e162e3e92274c8294c0d74edfeb"],["/archives/2019/index.html","9f370e959c4aee8c49c47e95e72f5328"],["/archives/2019/page/10/index.html","a32e018795f036182ff7d442ea7a7a51"],["/archives/2019/page/11/index.html","fb3ac984d5dcadad35b5e63252310772"],["/archives/2019/page/2/index.html","583cd8efc0ece320e3a912684c0bef23"],["/archives/2019/page/3/index.html","c18cc7d879f9d71dc7b096bf4b155567"],["/archives/2019/page/4/index.html","ea6a2e585766c817a959ed2f40a64570"],["/archives/2019/page/5/index.html","59d5cb6e9b4caec6a6dfe21961b25e68"],["/archives/2019/page/6/index.html","545a1bcf941b763d6ec37daf0d7c36f8"],["/archives/2019/page/7/index.html","7a98ed4afb668366237d0f751b473200"],["/archives/2019/page/8/index.html","58d60b5c58dee0056b8a9991ade6ffb1"],["/archives/2019/page/9/index.html","3ee8c2824bd78a36bd1fa657e5887a9d"],["/archives/2022/08/index.html","44ccda07d3cabdc78607b991a4091718"],["/archives/2022/index.html","70950ad18069feac722d6f745560511e"],["/archives/2024/11/index.html","0734b81e78295237c53d89c4dddbed25"],["/archives/2024/index.html","f6ab24dde88a2e73c41666568a06cf42"],["/archives/index.html","60862f7bdc6c6d9e21b6da4681e2ebdf"],["/archives/page/10/index.html","8250e26c50f1f9180500b7adcc36e483"],["/archives/page/11/index.html","e7823e6381a12e1653d8b1a1f319b8f1"],["/archives/page/12/index.html","421a77feb54e3bcec8ecfd4932872a1e"],["/archives/page/2/index.html","b842549a1909d544b880d2164e677019"],["/archives/page/3/index.html","604b11da21d361c9d80dc1ae2971d594"],["/archives/page/4/index.html","56f95f00b8df9c84304ec14e30de952e"],["/archives/page/5/index.html","9dde217f7f361bd3cf727bc7a2f0ec81"],["/archives/page/6/index.html","c0a8feff0e0944874c8803289afe4326"],["/archives/page/7/index.html","f313129d59a2cde61ba35fb465628477"],["/archives/page/8/index.html","214887ceffc55be4de9671131071e2d9"],["/archives/page/9/index.html","acb5a4fe24e5dded8b1647fe3bc1a503"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","1a93cf9410965bef1d7b512728d9d508"],["/categories/dxz/index.html","864923961a9c1c85fc665ad14ea8c990"],["/categories/index.html","443375591c8ef5d8697abac5558353f3"],["/categories/linux/index.html","e0e7383de7670260d784c56b47f6408c"],["/categories/python/index.html","ddb32c006603b66e780d33312161e70b"],["/categories/tensorflow/index.html","7532a116a4546e577e2924abab9c6dd5"],["/categories/图片分类/index.html","4f9dcf65a8e500264280cb4231203314"],["/categories/工具/index.html","5dab0851e0393fb7ce6de0d52799e44d"],["/categories/工具/page/2/index.html","b671ab3dacded8c9d58d064301f16bf9"],["/categories/强化学习/index.html","6d2ab68992782c900f6b6965c46e5c2d"],["/categories/数据集/index.html","73f5f76fb2ddf1e207673b46b02a32db"],["/categories/日语/index.html","1d4778849e6b5fd4999914ddbb4bcea6"],["/categories/日语/page/2/index.html","d7e6997d76826c4a09438dc93391ed9c"],["/categories/机器学习/index.html","aa0781bd0175a6e6905a531312595e45"],["/categories/深度学习/index.html","c91e4087fa50f5c953c2a91408cde656"],["/categories/深度学习/page/2/index.html","23ca822fa835b7a85934aa8d34878f1c"],["/categories/深度学习环境配置/index.html","b68949001ed32466451e06f1d8532056"],["/categories/深度学习移植/index.html","8239833b8c49c44887e03f9e196e33e3"],["/categories/计算机视觉/index.html","67939e09ce24096241f0884c4d15baad"],["/categories/读书笔记/index.html","f400bc74c44d6502a83a43592f6f6cf0"],["/css/main.css","55e435da6032f0cb96d92d2d803034f9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","94cded2d4d930d7705e7e8ce04478ddf"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","8b64bb8be32415a6f3773ed708a4444b"],["/page/11/index.html","d7ff6dd8da13a25ce3b403752ae772d1"],["/page/12/index.html","9c7953f1406a20a42b14972929b1f7f3"],["/page/2/index.html","ef80f9917004afb04581ffca9e22d8a6"],["/page/3/index.html","aeed63333de22ea8ca6c2c3c5cf61519"],["/page/4/index.html","3b2c9ceb2382f5f51b04b9d351d9c0bc"],["/page/5/index.html","8a58037d4b1ae60641628803c42175ca"],["/page/6/index.html","431e6d872da0bfe8f00489b8828d9801"],["/page/7/index.html","d5c80d8e33378b7820946bf8691d5b81"],["/page/8/index.html","31c3cad09b33c43829e258b712f01615"],["/page/9/index.html","13f7f50d18946a771bfc7ac16da850fd"],["/sw-register.js","72ec6617c7e9c60d1d3cb48addd7fe6b"],["/tags/AlexNet/index.html","b3f3dbb019c5a1080af2a5d0b2d13156"],["/tags/CNN/index.html","cf406324916e781b572da5ee2fd0d016"],["/tags/DCGAN/index.html","dd019535b4bedebac42987d26b89ff15"],["/tags/DDPG/index.html","d192b8892a3a6204424b4c3fe13bd338"],["/tags/DDQN/index.html","ed3dcee1a790b2606e5fa31d5f130287"],["/tags/DQN/index.html","56fc4ca49a888c9f81cb291dca1bc13c"],["/tags/GAN/index.html","24061111fa571461a426c3fa0afee1cf"],["/tags/IRL/index.html","100b5f7429c4dbde91d4b5c3a3ff2009"],["/tags/LSTM/index.html","ee17bad7368ab3de4e87c953a6fe42b1"],["/tags/LeNet/index.html","ca1442fb33f241f6df3573bf655b8b68"],["/tags/MC/index.html","e80d13b971820979a23f5a18dff3ee6b"],["/tags/PCA/index.html","ee42b68e158236e7d61ebec52984077f"],["/tags/PG/index.html","50252d450eb18ce06e43aa421cb85c22"],["/tags/PG3/index.html","201363e4d94653e6852a1880c3a4c50c"],["/tags/PIL/index.html","6f5f522cb7f4f579be11e87c770ea714"],["/tags/R/index.html","fef89cf36185022fcda027ce17bbf1dd"],["/tags/RNASeq数据下载处理全流程/index.html","6a13f2cb2ffe282771594514e3f87096"],["/tags/RNN/index.html","4a4aad32af4b6f4773a5680ad8efe130"],["/tags/SVC/index.html","4af68a911e791523ff8af13e16722bbf"],["/tags/SVD/index.html","f348b9167701dfb94ed182e674857c00"],["/tags/SVM/index.html","c5b87965e382f52fb11140cc41fa22cc"],["/tags/TCP/index.html","75ff76df3c0e5fd350258718c96892b8"],["/tags/TD/index.html","a9d4538f97444e155bc0d95353d2e449"],["/tags/TD3/index.html","97a6d0e853339947813a33c0291b758f"],["/tags/VGG/index.html","e10f252a05c892c4a40f66bdb677b384"],["/tags/amd配置/index.html","b179dfd134dfffd82d2881ca2508ead6"],["/tags/anconda/index.html","049122688765c53491d0b39580301463"],["/tags/conda常用命令/index.html","837d1a12bb51207b3e2698842d06ff7c"],["/tags/cuda配置/index.html","a05e94339a2f23225bba47eef77bbf59"],["/tags/docker-ldap-mysql-arm64/index.html","6876204024edb5aa95c2b6be70452a43"],["/tags/docker-ldap-mysql/index.html","bb60340ccce924b1720e7e1b27e46fe9"],["/tags/docker代理/index.html","b141c0a6362cf64ba7d27a7c8fa74c7b"],["/tags/docker安装/index.html","4944eea68469c38aff2dcc82b6551122"],["/tags/docker容器挂载硬盘/index.html","1f14c3d7d837c0f4f1cec4bf17099b84"],["/tags/ffmpeg/index.html","04b28940e1f81079bd18d82d789c4ed1"],["/tags/github上传代码/index.html","892b3fa6033bf91f695c524f0efac832"],["/tags/hexo/index.html","3e951837148f7ff524e8d0a6c199c89e"],["/tags/index.html","a3c75333a4b23c667f80c68157c296b2"],["/tags/java调用C/index.html","fbf61d65824999c3359ec3647f5856e3"],["/tags/jupyer配置vpn/index.html","5e592be377c7a125fd845790016b5edf"],["/tags/kaldi/index.html","8b9b52a1aaf61f9ab9c57a5c1d2995fc"],["/tags/linux命令/index.html","6ee0e1e6d20edb461baab9ddfcf90d5c"],["/tags/mamba/index.html","16dcdc1a9292b3a54de9ed804f83301e"],["/tags/markdown/index.html","8397709d4608279ac36b5d2b179f3062"],["/tags/matplotlib/index.html","df74ecf8c64234a30475f4596bef7a9a"],["/tags/numpy/index.html","87d137fbd747853bc0726b23229f8d27"],["/tags/opencv/index.html","fa065c7673db6e1a8a2ab9fe4e7052fd"],["/tags/pandas/index.html","73b0042d749af4177a422266ad8453b8"],["/tags/qq/index.html","3810f9c84c1a8dc716433bfc58ebfa7b"],["/tags/requests库/index.html","19edd851d4f37e2c72b674e6695f0b7c"],["/tags/rust-多平台demo/index.html","5d0b65416439c1d706f7ea63df385ad8"],["/tags/sacred/index.html","192803ddcf947524f5a883eeb8f44253"],["/tags/ssh-远程连接docker/index.html","753f25b23c2256993f7ca399b6b8234a"],["/tags/tflite编译/index.html","0e3fd3a3bd2749f1dd038cac751c0943"],["/tags/tflite转换/index.html","59f81bdc73aec2c64bd8e1eca199e9cf"],["/tags/torch和apex安装/index.html","1ebe341dcc414ac8b93f342017449020"],["/tags/vscode/index.html","25b605626a3342ec7418a57946f40353"],["/tags/wsl/index.html","6b20d63d9de65d7e7c90f58721bf42ca"],["/tags/zsh/index.html","a0f24af8498d8da8ed2be60360329937"],["/tags/代理/index.html","64695e07b7f3aad7e9b3c4f9730d5cfe"],["/tags/决策树/index.html","d43a44b0c8286b4943d8ea21ed00a3f6"],["/tags/函数/index.html","d3eef1aee9ebebd542a43ea9c7fa898c"],["/tags/列表推导式/index.html","9f0a9bc05681998c0e744de974d7343e"],["/tags/助词/index.html","307c7bdaa088728d2fc03fa4b462ae46"],["/tags/包/index.html","d7a77ddfcd18bf644c998e84d0318311"],["/tags/卷积神经网络/index.html","e20405732e66b3c776047a61761f7fa8"],["/tags/双系统安装/index.html","52b3c4c87ec3ddee9adc61a44f53c9be"],["/tags/反向传播/index.html","513ef493d3064040eab45478a63a5cd8"],["/tags/句型/index.html","e9dcc0285a8a5393440836b08919234e"],["/tags/可视化/index.html","54eca31b6841a2778fe9dd1a32a86103"],["/tags/哲学/index.html","96b45c9f794cae9b91fff9811779767a"],["/tags/图像美化/index.html","9d2795d15ad98e4e1ea5430cbe2db6e0"],["/tags/图床/index.html","67d9f3989d5e2765c6786b9c9cadc6e2"],["/tags/多继承/index.html","3c066509e5e89894e5a2794d62988cab"],["/tags/工具/index.html","ffcbb707e9e23165c59727c3f929c197"],["/tags/异常/index.html","32b93cf1480d7ec675cbb1aadfce08aa"],["/tags/强化学习/index.html","6e98c46d63a34a8de8800497328f4a06"],["/tags/心理学/index.html","18ae333cdc4519cb4e536202af71793a"],["/tags/感知器/index.html","947b8b67c52523a440f03d0d7187edaf"],["/tags/换源/index.html","0767d7d7dfe69ccddecc18c6dac391fb"],["/tags/描述器/index.html","cb29cb1f5aafa219fefc3bbf212a2197"],["/tags/敬语/index.html","4b80bf874ca474e335172d9894abdd8e"],["/tags/数据集/index.html","9ef15adfeec7809abf725a9f2475b5ae"],["/tags/文件/index.html","e1dbdb89054953f0cb5cd9592673775a"],["/tags/服务器配置LDAP/index.html","d6a8aa3ef1aa496d1a08b362b01be292"],["/tags/机器学习/index.html","ec2e8fa19cbde613b9e6111c54dd80e1"],["/tags/梯度下降/index.html","fc48b99381a9b4abff7449126f18d9b9"],["/tags/模块/index.html","2a2922adbdfa9007db78a35c551f0042"],["/tags/正则/index.html","9060b0d68fda311d1cf4f0e328a97a83"],["/tags/激活函数/index.html","fcec64529336716624eafd85c4b899ae"],["/tags/点击预估/index.html","a80a7f125208976f33a13e8e266d4dc0"],["/tags/爬虫/index.html","4037404b979886ec4d29c289c3539c8c"],["/tags/生成器/index.html","42dc9b1b7807b55bcfd114024978d423"],["/tags/类/index.html","68642c6ffa9c7b4750f0041a6775fa33"],["/tags/线性回归/index.html","6679abf6c5e8605b1c5c41a931b8de58"],["/tags/经济学/index.html","92aab7716c16d4058116374f07e0d830"],["/tags/聚类/index.html","a17a97d075a4f42b3737cf40c7ebcc69"],["/tags/装饰器/index.html","3fa006d56a190980ddf1ae9dec1d8da5"],["/tags/词型变换/index.html","a2ac4c756fa321e9376c86ae5a7192d5"],["/tags/语义分割/index.html","f44ee4de73e85781b5b021a78e3fd642"],["/tags/语法/index.html","b20b7f21a383febda5718f14e3f58b2d"],["/tags/语法/page/2/index.html","3df78c074d22aecef5f93e06803706da"],["/tags/迭代器/index.html","b400f6e6c6fb26f1544f80a6d03c5d27"],["/tags/逻辑回归/index.html","bae8c78fa4ab6e2fefa768203014ce5e"],["/tags/随机森林/index.html","bfef572545a747d0728747a8e2fc17e8"],["/tags/魔方方法/index.html","9b30b791aafecc2e65c7003a23f0ab2e"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
