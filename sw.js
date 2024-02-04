/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","d937a31338ada284fac789b16641a113"],["/2019/01/02/Anconda常用命令总结/index.html","dfa3c77dca3a8fe6f52519f19ef49944"],["/2019/01/02/句型/index.html","1c3b1ef31c00947dca9d6a8ab2e7cbca"],["/2019/01/02/日语助词/index.html","8f7220818c16ac1c267381575f7619e5"],["/2019/01/03/on-my-zsh/index.html","d8c5b1d4ffc88c3738fb09bf1907a1b3"],["/2019/01/04/《当我遇见一个人》摘录/index.html","61961ff71baa31e88c46a42998e99e99"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","238859dd610ca1bf1237ed0d6c4c12f6"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","28f7dfc5233a79cb22eccaf2fd85d9f4"],["/2019/01/04/经济学笔记/index.html","f9a0ad5b5112b309336dd284cb5af595"],["/2019/01/04/语法总结（5-15）/index.html","19b27c2f3fb73ae7049938643930d4bf"],["/2019/01/05/linux常用命令/index.html","7cd24e3ed08afd3071f47da70102a5de"],["/2019/01/06/敬语/index.html","f4e9ffadc2e569a368be460d94eb768b"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","abf985c6389e4529534e069fab3a956f"],["/2019/01/07/cuda 手动配置/index.html","fdee2a47372fbf256ec2ba52c6d4b5ed"],["/2019/01/07/docker-ldap-mysql/index.html","27ccc92075a05a58c6f978c172e96a7d"],["/2019/01/07/docker安装/index.html","a0b8b12dd7949b85150649e442fe75c3"],["/2019/01/07/docker容器挂载硬盘/index.html","3c89760b8506a881fe2cab0e2e98b025"],["/2019/01/07/github上传代码/index.html","97b581b4ccd6619e5b9db22a798de8e3"],["/2019/01/07/kaldi 安装/index.html","429961397bdb908974c375f2889ab511"],["/2019/01/07/linux常用工具/index.html","8de24e56aa6d55b97608449c42a00150"],["/2019/01/07/opencv/index.html","64ad688499e5dc4ef7af473b24bce4f1"],["/2019/01/07/ssh 远程连接docker/index.html","2e1aec5961b070f83b9456b76d34b132"],["/2019/01/07/导出/index.html","4764bcb0183c2764d61b59701cf4e954"],["/2019/01/07/换源/index.html","b43a20cb38249613a28a2408c588e29c"],["/2019/01/09/markdown/index.html","e850335473ce18435203548426bda414"],["/2019/01/09/opencv图像美化/index.html","c0ff3967f35539499f85194f6f3368b6"],["/2019/01/11/19单元语法/index.html","db7d1d0e6219c10de90d1d6f2a96a820"],["/2019/01/11/20单元语法/index.html","f8c939e60573f2828c102851eba610e8"],["/2019/01/11/opencv-图片几何变换/index.html","d13953ca7fe50cd5f68205104fc632a7"],["/2019/01/11/opencv-图片处理及绘图/index.html","04ce6dbe87138c5870909f2fe85e3c87"],["/2019/01/11/wine安装qq/index.html","94265d96023d78932e4673a2e0a6878f"],["/2019/01/12/tensorflow-可视化/index.html","141cdbe4b60d1c81b24999e47985e1ce"],["/2019/01/12/tensorflow-基础语法/index.html","60f20c5847f69711bfe1f4e37c103708"],["/2019/01/13/RNN/index.html","6a88ca1800c043ef5724a44c0c6f78d8"],["/2019/01/13/keras实现CNN/index.html","e5d17837da55fbf0b0a478c171532c9e"],["/2019/01/13/卷积神经网络实现/index.html","4401acea914a6a297a7979a38a20e951"],["/2019/01/13/循环神经网络RNN-写诗/index.html","1c8ce752fb1b26503a911b8a81056d51"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","de1686d1dc91d605bca8b9c127cb1041"],["/2019/01/14/反向传播/index.html","63d562bc9120201f5551cf13a8899ade"],["/2019/01/14/图床/index.html","aeec7c29ac4f4229efde5fa57294675a"],["/2019/01/14/感知器与激活函数/index.html","8ea7b0e1d94be9c30c4a94df91b4b738"],["/2019/01/15/PIL简单应用/index.html","6399003b2092ca927e7ba032ba39f1c8"],["/2019/01/15/卷积神经网络理论/index.html","239dde2eb92b9aa6821539accdf68bf6"],["/2019/01/15/图片分类之pca-svc/index.html","fde67b834a4156c4929eea50a89b94df"],["/2019/01/15/强化学习基础/index.html","3954903cb980e90ef3f0ffb62ea3e70d"],["/2019/01/15/经典神经网络/index.html","be8ea6ec60fb68e3724a5f1725a6075b"],["/2019/01/16/DQN/index.html","2555fa39ebb9fa751cf04e54abe501b7"],["/2019/01/16/TCP传输图片/index.html","63b2d2e1d3e05ec30c604141ff56c67d"],["/2019/01/16/时序差分学习/index.html","c8f2a39fc3a5eb8b69e040c8d7cf3ab7"],["/2019/01/16/蒙特卡洛方法/index.html","cc34e3733c6f1e06c6f060f10300d855"],["/2019/01/17/Double-QDN/index.html","7e9c96dfb895e28fb7265c4e051067b3"],["/2019/01/17/RNN理论/index.html","7d9753d1e3864843b640fae6ce648dfb"],["/2019/01/17/梯度下降/index.html","1c294a1477cdeb6f14a58238fe06cda7"],["/2019/01/18/PG和TD3/index.html","c930c664f10d237e95a780bd6c843823"],["/2019/01/20/21单元语法/index.html","fc767e892b05ffdda25f7d0b1ae05dee"],["/2019/01/20/GAN理论/index.html","87f12bd819d825cfad25f822a2f1a00c"],["/2019/01/20/PG3和IRL/index.html","b93a999efd317f0265f2aedd24f43ee3"],["/2019/01/20/数据集/index.html","aa92cf70337c54758f856619463fbb74"],["/2019/01/21/DCGAN/index.html","b9be4b4239f5bf38e48f21afef5373a2"],["/2019/01/21/LSTM/index.html","e37b9998bdedd1cbad5bd1263e8a64db"],["/2019/01/21/点击预估/index.html","3f8111a10ba9747166a7c9359dce7bf1"],["/2019/01/22/SVD分解/index.html","d375ead26d3af7384c3055886b3bdfff"],["/2019/01/22/SVM/index.html","cbfe21133bca47776b5e5f9028875bfe"],["/2019/01/22/机器学习简介/index.html","1dd398ba3b70156c412a301fdda424e8"],["/2019/01/22/线性回归/index.html","707ea04663f5ffba4effe3c37d1188f9"],["/2019/01/22/逻辑回归/index.html","0c4b5795da01056af5755e3be808c680"],["/2019/01/23/numpy/index.html","d8141e1934bf396451d533e586fd1fed"],["/2019/01/23/决策树与随机森林/index.html","9d8e757d68b6039d6058740ed9693c4d"],["/2019/01/23/聚类/index.html","75245b83183ca0c7bda06adbe762a4fd"],["/2019/01/24/matplotlib/index.html","e24bf1c64f44d577e1ef9970a8da67f0"],["/2019/01/25/pandas/index.html","27ca5d639caff27c0639122166fe068a"],["/2019/01/25/语义分割/index.html","596fc1c04fbe14a8283abf16785f57fa"],["/2019/01/27/22单元语法/index.html","5570d83f70402639b0b0c17bef0d889e"],["/2019/01/27/SVM案例/index.html","469b26be8b8067ee40ed2ffe22e55794"],["/2019/01/28/requests库及爬虫案例/index.html","53c8412744b489a8e6df5fa331e14cf2"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","0a6f3b1370b950bda8dccb71ed2fcfce"],["/2019/01/28/异常/index.html","1c46c8796ad6870389e2ccff061b4599"],["/2019/01/28/描述器和装饰器/index.html","56c6474f35609b9c95a4e4fa10daaa96"],["/2019/01/28/文件/index.html","9e662afb28f13f30abcaf0354a9a215f"],["/2019/01/28/正则/index.html","64c40e2f35d6b306058e8d81d1b95a69"],["/2019/01/29/函数基础和函数参数/index.html","e99d927a2d40d5d0e8e57edd3a450224"],["/2019/01/29/多继承和魔方方法/index.html","4538a344a18962c7e711558ded9a2243"],["/2019/01/29/类定义、属性和继承/index.html","4732c0e9f9a45f821d5be87e289e566c"],["/2019/02/27/23单元/index.html","93998da76a2716687b4f00a4f286b319"],["/2019/03/12/hexo系统重装恢复/index.html","1295164a19efe5213597ae8bc6eb6eb3"],["/2019/03/13/24单元/index.html","354fa20337b7e06288ed97bb4cb94225"],["/2019/03/19/25单元/index.html","20072d6ecc6bda5ffad83ba7a6280d9c"],["/2019/03/26/26单元/index.html","201ba9e52dcec25b7e172b5dda62b652"],["/2019/04/14/27单元/index.html","874298ed56079e292c83a2c56be45591"],["/2019/05/01/28单元/index.html","735ad26067cbc7c523a537ff60e6aaee"],["/2019/05/02/29单元/index.html","dd1c7cbd7357d8359682f267febbd506"],["/2019/05/12/30单元/index.html","c25fba0cb6affd3e0924473bf6a3fbfc"],["/2019/06/03/jni/index.html","525f34bfa25365f25aee77a93e3f9de6"],["/2019/06/07/JNA/index.html","1943052c56d14cea9eebc266ba7df099"],["/2022/08/07/R配置jupyter/index.html","fc5f6de8345d3f28487a25405998670a"],["/2022/08/18/FFmpeg常用命令/index.html","9a3db1d569b54fcd3cdc34a29cc7153b"],["/2022/08/18/linux系统代理/index.html","4eb29f191354e030234c5024eb7bf406"],["/2022/08/18/matplotlib补充/index.html","d2759c58f31bbb34173c57d7a0255e5c"],["/2022/08/18/常用命令/index.html","023af34198deee4c23b58fd8cf63ef6f"],["/2022/08/20/sacred/index.html","40cdab6a491d229fb42c3bd1fc25811e"],["/2022/08/20/wsl/index.html","ccf53d0f535d54cd34b04303504469a8"],["/2022/08/20/双系统安装/index.html","ca15c4978db2d84156dee67732b73504"],["/2023/06/28/source/index.html","a656e1fba7549509068fe8c5d207573c"],["/archives/2018/12/index.html","cd9b0cedc4a91bc4de6f15af99ab9665"],["/archives/2018/index.html","73d0d34a40da98c2acaf0a570c6eb693"],["/archives/2019/01/index.html","a77c63503a9ad1e3b08f51e522e8db3d"],["/archives/2019/01/page/2/index.html","7ed147cd9e7a788467b09d686c823ddb"],["/archives/2019/01/page/3/index.html","bf23b475f2b627c742ad1be2d39adc01"],["/archives/2019/01/page/4/index.html","f8fa9c1897c6c8b87fbc7f0071eed249"],["/archives/2019/01/page/5/index.html","6b7b8d19e1acda0f428eba8caaaaa6d9"],["/archives/2019/01/page/6/index.html","56b55b84638e110648a66b999eb97710"],["/archives/2019/01/page/7/index.html","6157580525202dc39a0584a86b2680d4"],["/archives/2019/01/page/8/index.html","9fbf74f41d99b3b42c1101b59ee92817"],["/archives/2019/01/page/9/index.html","43809f8c2741a42878eda6034c95ec5c"],["/archives/2019/02/index.html","0c34a4287df1fe73e8c0da203c71ccf2"],["/archives/2019/03/index.html","49dd0f5d3c4a1f872d9b58bbc72bbda8"],["/archives/2019/04/index.html","b743c5fa4743c88832fc71a44b0f80f8"],["/archives/2019/05/index.html","ff0831ddef8ec0816130806464cda0b4"],["/archives/2019/06/index.html","8f699804fd275cf1301bc7f638620ddf"],["/archives/2019/index.html","4865712476352754aafc4af99161208b"],["/archives/2019/page/10/index.html","8bf6680bd587ef445b5d84af38ce793b"],["/archives/2019/page/2/index.html","375836d068ed43ffa8b1753b90f3349f"],["/archives/2019/page/3/index.html","94da012b9f67fa5dd8fa08f004e6672b"],["/archives/2019/page/4/index.html","3da1493040e0eb61897e84eb5e4b5cd7"],["/archives/2019/page/5/index.html","35414524453347ee52f3ed537ff01401"],["/archives/2019/page/6/index.html","b6da6a1ce9234332babba9aca90e85b9"],["/archives/2019/page/7/index.html","9892ca6c2ad73764ba1ee3195199c634"],["/archives/2019/page/8/index.html","f0092cdc4fdac552e3ed32545471071f"],["/archives/2019/page/9/index.html","ebc7ff7ad78eefccef58fcfc02aa9054"],["/archives/2022/08/index.html","c0f151178515692e57b49ecf46dada17"],["/archives/2022/index.html","09bdb9df030da9e4219d4c3fef1a9c4c"],["/archives/2023/06/index.html","2530b08b2a2e65ae7085191fdc950d79"],["/archives/2023/index.html","af26b5e64e179ed1416f6b7574c22bf4"],["/archives/index.html","4c2a967d4baf38504ab66de86ee77314"],["/archives/page/10/index.html","6a2fb7247a02b5ca1900a652aa54c384"],["/archives/page/11/index.html","1fff5ad84880ba20d2ab09c0e4d2ef28"],["/archives/page/2/index.html","c4dffc4a2611e98cba6ddb6f16db21b7"],["/archives/page/3/index.html","505da158a236d5bf092d29b6dcf7446e"],["/archives/page/4/index.html","d59048c46e153030ea0932cff13ae880"],["/archives/page/5/index.html","1452d9f9802364fcc825151dec15a212"],["/archives/page/6/index.html","2c13c4b2729b81ab4fb5b979be533f7d"],["/archives/page/7/index.html","77dcef2f2a28cf177a2f161863783071"],["/archives/page/8/index.html","0a6c6f32d3ec72eaa8a6fa4d28fc4395"],["/archives/page/9/index.html","efb75bb40bf5477792c8550d1f18aaa2"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","117dec666e07e8fb5b6b5ed2591ea689"],["/categories/dxz/index.html","32041506a389a9fd71bfc37d7491d321"],["/categories/index.html","96c1bb203f92c84e11a883539e619188"],["/categories/java调用C/index.html","0d581c91318c034f1ad4dc3886d6b59d"],["/categories/linux/index.html","ee5c5b6de3ae3a61e7e8cba171800eca"],["/categories/linux/page/2/index.html","7e7c5dd5b7af9e962271facb6c2f3bab"],["/categories/python/index.html","036aeac4aaf8379abaff5cc01527c11b"],["/categories/tensorflow/index.html","03ebee5d9665653da1de4bf35adc9322"],["/categories/优化算法/index.html","e8cd6b56646ac5e052ac68e043890fef"],["/categories/图片分类/index.html","b9374c2818c1323cb9f68d0ae6b37324"],["/categories/工具/index.html","b86e339833fe8d69823ffbde7f99ca79"],["/categories/工具/page/2/index.html","f4a59eeff91974a2dbc01aa439cbe3a2"],["/categories/强化学习/index.html","3dcce090ab7c94274cc5e5c28ec5bc63"],["/categories/数据集/index.html","5695e56fb567b067d8da718fd679fc16"],["/categories/日语/index.html","eee255f697f3270b29c2f447d3777c5e"],["/categories/日语/page/2/index.html","2a202a610a8f9f604c208b67f801b7e8"],["/categories/机器学习/index.html","2d20f04fc1517f53d2e5248b65332afb"],["/categories/深度学习/index.html","a20de28f79591a58de9cfbbcd1501586"],["/categories/深度学习/page/2/index.html","24cd2f3799492bdd6c43bb192f298ba7"],["/categories/计算机视觉/index.html","97502c383b2ad9ebcb736da6ca4d4d35"],["/categories/读书笔记/index.html","599b47998b4d20a15056c800832b2e65"],["/css/main.css","83e2b2fd87a1a6068e7a8b680e5474e7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","75ae2f35753a577c91bc5898a87be3bd"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","d082aa650f8e80321320f3e9e26a3349"],["/page/11/index.html","268498905731775a69f8e8e1f0a13d16"],["/page/2/index.html","32a520956626d37f6d43b28211eaa713"],["/page/3/index.html","df9e2def770437abf754f7d52925a717"],["/page/4/index.html","bad1081a511d12c5b2694aae625c1683"],["/page/5/index.html","3f117295994b3b0e8c977faa149430d4"],["/page/6/index.html","8db5e225a9a8a8fc0789954070fe957b"],["/page/7/index.html","3d6892fcedcc77362438f6a3ea6e91b9"],["/page/8/index.html","0fbc54593b3c294562886077bb196a51"],["/page/9/index.html","7a63222528d949407147f7ce3b3989cd"],["/sw-register.js","8c14c7558e143ddc1fa9eccc4e17d8b3"],["/tags/AlexNet/index.html","913033f14d8835ec1125b7a1a75baa4c"],["/tags/CNN/index.html","852285e9ea85a14322af867825012354"],["/tags/DCGAN/index.html","902934cd33e867c2551b71e2300d0826"],["/tags/DDPG/index.html","66db0f7e883e9ce602aa796c769c2209"],["/tags/DDQN/index.html","e1fece4019134363d8df3cf13377fd68"],["/tags/DQN/index.html","c63f2512fbd1a6180dbca264e5fa8a60"],["/tags/GAN/index.html","a50472d440b36b4642dfccf872b393f4"],["/tags/IRL/index.html","d1be617d2cc42c52f17e510c292ef4d5"],["/tags/LSTM/index.html","4cbc8440b1110ef2598bec3c8f97079d"],["/tags/LeNet/index.html","d1ef767706cd87f2ae47a3b8d623c0fc"],["/tags/MC/index.html","87828f587e41cb7fe194f3325b3929fd"],["/tags/PCA/index.html","69eb02a7a078e5be678952b856de6065"],["/tags/PG/index.html","27ccd532c34375216173163095a9b3b7"],["/tags/PG3/index.html","8da06e928a9d494672e4ab3940984713"],["/tags/PIL/index.html","05f202c744c47dce390cbd2a5594f26c"],["/tags/R/index.html","f8c2984b0dbe2f3e92d02a542d8c08b8"],["/tags/RNN/index.html","fd241255d22f27fe60ead87c252ade50"],["/tags/SVC/index.html","f48ca1ad135edd153bb05f78f8ee510c"],["/tags/SVD/index.html","259b1a039f29e60d8747559858957b34"],["/tags/SVM/index.html","05e7755171f8b89d32ce4155f28a85ba"],["/tags/TCP/index.html","6fd0cec0d2ef1a7cc03e91de95838316"],["/tags/TD/index.html","bbfb3d0a5e296c4ebd6e9e12c941e3de"],["/tags/TD3/index.html","5e93274bafb1b2045d09508e830a6b5b"],["/tags/VGG/index.html","ff7d826512cf4245aa5c9606eaa55697"],["/tags/amd配置/index.html","be60e56ffbad3e823b497996cf1c9d1d"],["/tags/anconda/index.html","ad57ab1b5fc1c7783731c7015eb7275e"],["/tags/conda常用命令/index.html","10139d6311cf1c07801a1e4517762e8b"],["/tags/cuda配置/index.html","9c98b0037a7a210fb7885cd41ee46861"],["/tags/ffmpeg/index.html","1c2373ba263ef13656e37f8831be19cb"],["/tags/github上传代码/index.html","6095ed41012926fcf6b570d58ac34ee9"],["/tags/hexo/index.html","c6467a1c2b99813b56c0bfea128eacd4"],["/tags/index.html","eb7bf2e537bc18175a999c3734cb2dc0"],["/tags/java调用C/index.html","568792b741112a318a41e60672f5eff6"],["/tags/kaldi/index.html","1030b9b9dd772d3be5d00cbdc2fcda28"],["/tags/linux命令/index.html","11c7fd753c8e9aceea6b47e387649f48"],["/tags/markdown/index.html","4895158573c420fab3933f7809a5c985"],["/tags/matplotlib/index.html","534adbdba0b860c9d17b19bc774bafa9"],["/tags/numpy/index.html","72ef06da741e15a85fa9c9d91beee62b"],["/tags/opencv/index.html","acb3b2a21f75a5d10eacacbb11bbee6a"],["/tags/pandas/index.html","5bf8dcead299508c8a4bd6c11e461df9"],["/tags/qq/index.html","fa651126015d58a774ff64b97a7ab007"],["/tags/requests库/index.html","369714c9e9c1fad846435dd18baa0df4"],["/tags/sacred/index.html","c5c185512ce4aa05c683abdfc723a4c9"],["/tags/ssh-远程连接docker/index.html","3c5ada7e22364783ddbaaa5ed5f321ea"],["/tags/wsl/index.html","0831899e168a34f0b58543a6ac80d17e"],["/tags/zsh/index.html","6308a6644cf34bdd6f78643cea7d28e7"],["/tags/代理/index.html","3e1315a05a2d7edd5c090856db76b600"],["/tags/决策树/index.html","99e7f16e9d0b9346070efac715ac9b85"],["/tags/函数/index.html","1768ce34bfc40c1418a640606cd2b113"],["/tags/列表推导式/index.html","ef44f3a006e11ca9f657d23ab4017202"],["/tags/助词/index.html","aaa379611b4f7a51a34b7c0345da1360"],["/tags/包/index.html","d27adbce00e87cc1dc991fb13fc19814"],["/tags/卷积神经网络/index.html","f003416c93634ecf06d07cd52f7e4c00"],["/tags/双系统安装/index.html","c9c7d633e08d5bf2c91fc90c7c26da38"],["/tags/反向传播/index.html","8930087c8fb43c51f5f14c92c8d2c9ae"],["/tags/句型/index.html","4a9d96ac3124f4ed05fa0e22f718eea8"],["/tags/可视化/index.html","3562fc76c6b9abf9a45f24776394dc2b"],["/tags/哲学/index.html","276d69d98faf6df45b8e217e0751ed0a"],["/tags/图像美化/index.html","2504fb0d97441f16a7ff489fa275b438"],["/tags/图床/index.html","46f78be584221452ba3f0cb5d5e0bfc6"],["/tags/多继承/index.html","a9850e12e3169d608d92b18fb57774a7"],["/tags/工具/index.html","5a8d21c453d32c293c5a4aa6d2e08fce"],["/tags/异常/index.html","16ede0b6094b1a5ecbacbb64306292ce"],["/tags/强化学习/index.html","a5c9bf468de536d6adcce15a0e35032d"],["/tags/心理学/index.html","2c34215f3761ec8a241ab46e158d9891"],["/tags/感知器/index.html","f983b51d5a7de68eb7fda52e2d635d12"],["/tags/换源/index.html","64afbb5f66e535b3e7d49bccd8c86b6c"],["/tags/描述器/index.html","03e8413bd0edc61911c7413c5b9f952c"],["/tags/敬语/index.html","729cbb0ebd124d77ad981cfc917a10ca"],["/tags/数据集/index.html","500550f1670a2684be5d7e5d2a00cd27"],["/tags/文件/index.html","712d7571ca9a8fdf500975af6a314f97"],["/tags/机器学习/index.html","74aed4712aa410058742b745931bf998"],["/tags/梯度下降/index.html","6168c663d3344401cf2bfa3f9c152e89"],["/tags/模块/index.html","3ed820384153a236fd62337c1a576d5a"],["/tags/正则/index.html","74aa0dcb63427fa33828de941bac2088"],["/tags/激活函数/index.html","68366c826c082e89a19b4b22c7ced381"],["/tags/点击预估/index.html","d9ec40e5027decee9450f4143ed1ccce"],["/tags/爬虫/index.html","8f1b99c6e24910c58a768a59572745a3"],["/tags/生成器/index.html","7a762a2925b536b8e1c10e298e023319"],["/tags/类/index.html","bf775b28a4f7a99bba9b87c517b96737"],["/tags/线性回归/index.html","b0c8d60d708b00d085342e3f7d1805cf"],["/tags/经济学/index.html","1a9a3673318060e757cba53a1254cba8"],["/tags/聚类/index.html","a734fb1f2477d15132a7a60ca1718d46"],["/tags/装饰器/index.html","4a57d23640eccf7f3acc368576ad859c"],["/tags/词型变换/index.html","6cc5ee4a8952bd45d586b821cde7f9f5"],["/tags/语义分割/index.html","f31a579c94c78662f419b388ee319f4d"],["/tags/语法/index.html","011cdf3af93460605156cafdf198d4ff"],["/tags/语法/page/2/index.html","47e2f6ae5e0cab0a0ea534b0e951516d"],["/tags/迭代器/index.html","d98df9f20bded562b60ebd51961e71c9"],["/tags/逻辑回归/index.html","da6e7bb3ef85964d48cb256a55b62e94"],["/tags/随机森林/index.html","1afa948e3d8844ba174bd6d74d778b35"],["/tags/魔方方法/index.html","dcf2c39575a24987f5889c5907b83e7f"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
